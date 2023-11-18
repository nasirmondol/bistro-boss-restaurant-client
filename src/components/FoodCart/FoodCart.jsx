import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCart = ({items}) => {
    const  [, refetch]= useCart();
    const {user} = useAuth();
    const useAxios = useAxiosSecure()
    const navigate = useNavigate();
    const location = useLocation();
    const { name, image, price, _id } = items;
    const handleAddItem=(food)=>{
        // console.log(food, user.email);
        if(user && user.email){
            // Todo: cart add korte dibo database e
            console.log(food, user.email);
            const cartItems = {
                menuId: _id,
                email: user.email,
                name, 
                image, 
                price
            }
            useAxios.post('/carts', cartItems)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "successfully added",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                refetch();
            })

        }
        else{
            // login korte bolbo
            Swal.fire({
                title: "Are you sure you want add to cart?",
                text: "Yes I want to Add",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login now!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{from:location}})
                }
              });
        }
    }   

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-orange-900 absolute  text-white right-0 lg:px-6 mr-4 top-4 rounded-md ">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex justify-start">
                   <button onClick={() => handleAddItem(items)} className="btn bnt-outline rounded-md border-b-4  border-t-0 border-l-0 text-orange-400 border-r-0 border-orange-500">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;