import { RiDeleteBin6Line } from "react-icons/ri";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle";
import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageUsers = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        console.log(item)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${res.data.name} has been saved`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }


    return (
        <div>
            <SectionTitle heading="Manage Users" subHeading="Hurry Up"></SectionTitle>
            <div className="lg:px-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>{item.name}</td>
                                    <td>
                                        <Link to={`/dashboard/updatemenu/${item._id}`} className="text-xl btn-ghost font-semibold bg-orange-500 text-white w-8 flex justify-center h-8 items-center rounded-md">
                                            <FaUsers />
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="text-xl btn-ghost font-semibold bg-red-500 text-white w-8 flex justify-center h-8 items-center rounded-md">
                                            <RiDeleteBin6Line />
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;