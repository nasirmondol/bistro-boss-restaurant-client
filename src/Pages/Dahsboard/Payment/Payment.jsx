import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../CheckOutForm/CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_key);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Eat and then pay"></SectionTitle>
            <div className="lg:px-10">
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;