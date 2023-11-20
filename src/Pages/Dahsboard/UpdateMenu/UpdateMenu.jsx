import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useUserPublic from "../../../hooks/useUserPublic";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateMenu = () => {
    const loaderData = useLoaderData();
    console.log(loaderData)
    const { name, price, recipe, category, _id } = loaderData;
    const axiosPublic = useUserPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': "multipart/form-data"
            }

        })
        console.log(res.data)
        const menuItems = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url

        }
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItems);
        console.log(menuRes.data);
        if (menuRes.data.modifiedCount) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} has been updated`,
                showConfirmButton: false,
                timer: 1500
            });
            // reset();
        }
    };

    return (
        <div className="bg-[#F3F3F3] lg:px-10 px-4">
            <div className="bg-[#F3F3F3] lg:px-10 px-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input defaultValue={name} {...register('name', { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} className="select select-bordered w-full" {...register("category", { required: true })}>
                                <option value="salad">salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="deserts">Deserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input defaultValue={price} {...register('price', { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea defaultValue={recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </div>
                    <input {...register('image', { required: true })} type="file" className="file-input m-4 w-full max-w-xs" />
                    <button className="flex mb-10 mt-5 items-center btn bg-gradient-to-r from-[#835D23] to-[#B58130]">
                        Add Items <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMenu;