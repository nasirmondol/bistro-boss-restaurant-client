import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const { user } = useAuth();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    console.log(totalPrice);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('payment error', error)
            setError(error.message);
        }
        else {
            console.log('Payment method', paymentMethod)
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }

        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('Payment intent', paymentIntent)
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent.id)
        }

        const payment = {
            price: totalPrice,
            email: user?.email,
            date: new Date(),  //utc date convert. use moment js
            cartId: cart.map(item => item._id),
            menuIds: cart.map(item => item.menuId),
            transactionIds: paymentIntent.id,
            status: 'pending'
        }

        const res = await axiosSecure.post('/payment', payment);
        console.log('paymentSaved', res.data);
        if (res?.data?.paymentResult?.insertedId) {
            refetch();
            event.target.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for the payment!",
                showConfirmButton: false,
                timer: 1500
            });
        }


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className="my-4"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-primary my-4" type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-500">{error}</p>
                {transactionId &&
                    <p className="text-green-600">Your Transaction Id is: {transactionId}</p>
                }
            </form>
        </div>
    );
};

export default CheckOutForm;
