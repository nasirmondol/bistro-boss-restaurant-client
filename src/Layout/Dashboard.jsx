import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className=" w-64 bg-orange-200 min-h-screen">
                <ul className="p-4">
                    {
                        isAdmin ? <>
                            <li><NavLink
                                style={({ isActive, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "green" : "black",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                                className="gap-1 flex font-serif py-2 text-xl uppercase items-center" to="/dashboard/adminHome"><MdHomeFilled /> Admin Home</NavLink></li>

                            <li><NavLink
                                style={({ isActive, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "green" : "black",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }} className="gap-1  flex font-serif py-2 text-xl uppercase items-center" to="/dashboard/addItems"><FaUtensils />
                                Add Items</NavLink></li>

                            <li><NavLink
                                style={({ isActive, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "green" : "black",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                                className="gap-1 font-serif flex py-2 text-xl uppercase items-center" to="/dashboard/manage"><TfiMenuAlt /> Manage Items</NavLink></li>
                            <li><NavLink
                                style={({ isActive, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "green" : "black",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                                className="gap-1 font-serif flex py-2 text-xl uppercase items-center" to="/dashboard/bookings"><TbBrandBooking /> Manage Bookings</NavLink></li>
                            <li><NavLink
                                style={({ isActive, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "green" : "black",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                                className="gap-1 font-serif flex py-2 text-xl uppercase items-center" to="/dashboard/users"><FaUsers /> All Users</NavLink></li>

                        </> :
                            <>
                                 <li><NavLink
                                style={({ isActive, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "green" : "black",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                                className="gap-1 flex font-serif py-2 text-xl uppercase items-center" to="/dashboard/userHome"><MdHomeFilled /> User Home</NavLink></li>
                                <li><NavLink
                                    style={({ isActive, isTransitioning }) => {
                                        return {
                                            fontWeight: isActive ? "bold" : "",
                                            color: isActive ? "green" : "black",
                                            viewTransitionName: isTransitioning ? "slide" : "",
                                        };
                                    }}
                                    className="gap-1 font-serif flex py-2 text-xl uppercase items-center" to="/dashboard/paymenthistory"><FaUsers /> Payment History</NavLink></li>
                            </>
                    }

                    <div className="font-serif divider divider-accent"></div>
                    <li><NavLink
                        style={({ isActive, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "green" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                        className="gap-1 font-serif flex py-2 text-xl uppercase items-center" to="/"><MdHomeFilled />

                        Home</NavLink></li>
                    <li><NavLink
                        style={({ isActive, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "green" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                        className="gap-1 font-serif flex py-2 text-xl uppercase items-center" to="/"><MdOutlineMenu />
                        Menu</NavLink></li>
                    <li><NavLink
                        style={({ isActive, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "green" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                        className="gap-1 font-serif flex py-2 text-xl uppercase items-center" to="/"><MdOutlineShoppingCartCheckout />
                        Shop</NavLink></li>
                    <li><NavLink
                        style={({ isActive, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "green" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                        className="gap-1 font-serif flex py-2 text-xl uppercase items-center" to="/"><MdOutlineMarkEmailRead />
                        Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;