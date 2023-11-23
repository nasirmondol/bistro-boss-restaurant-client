import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleDeleteUser = (user) => {
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

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        refetch();
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `Your file has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleUpdateAllUser = (user) =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is now admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <div className="flex justify-evenly mt-10">
                <h2 className="text-2xl font-bold ">All Users</h2>
                <h2 className="text-2xl font-bold ">Total Users: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto lg:px-10">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>index</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        { user.role ==='admin'? 'Admin' : 
                                            <button onClick={() =>handleUpdateAllUser(user)} className="text-xl font-semibold bg-orange-500 text-white w-8 flex justify-center h-8 items-center rounded-md">
                                            <FaUsers />
                                        </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="text-xl font-semibold bg-red-500 text-white w-8 flex justify-center h-8 items-center rounded-md">
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

export default AllUsers;