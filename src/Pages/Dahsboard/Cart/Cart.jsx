import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data)
                        refetch();
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `Your file has been deleted.`,
                                icon: "success",
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="items-center px-4 mt-10">
            <div className="flex justify-center gap-10 items-center mb-5">
                <h2 className="px-4 text-xl text-center">Cart: {cart.length}</h2>
                <h3 className="text-xl font-semibold">Total: ${totalPrice}</h3>
                { cart.length?
                    <Link to="/dashboard/payment">
                    <button className="btn btn-primary btn-outline">Pay</button>
                </Link>:
                     <button disabled className="btn btn-primary btn-outline">Pay</button>
                }
            </div>
            <div>
                <div className="overflow-x-auto bg-white shadow-2xl">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.map((c, idx) => <tr key={c._id}>
                                    <th>{idx + 1}</th>
                                    <img className="w-12 rounded-full" src={c.image} alt="" />
                                    <td>{c?.name}</td>
                                    <td>Price: ${c?.price}</td>
                                    <button onClick={() => handleDelete(c._id)}><MdDelete className="text-xl text-red-500" /></button>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;