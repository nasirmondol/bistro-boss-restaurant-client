import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { BsFillCartXFill } from "react-icons/bs";


const Navbar = () => {
    const [cart] = useCart();
    console.log(cart);
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error) })
    }
    const navLInk = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li>
            <Link to="/dashboard/cart">
                <button className="">
                    <div className="badge badge-secondary"><BsFillCartXFill></BsFillCartXFill>+{cart?.length}</div>
                </button>
            </Link>
        </li>
        {user ?
            <div className="flex items-center">
                <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn-ghost">Log out</button>
            </div> :
            <>
                <li><Link to="/login">Log in</Link></li>
            </>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 text-black bg-opacity-20 max-w-screen-xl bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLInk}
                        </ul>
                    </div>
                    <div className="uppercase">
                        <a className=" text-2xl font-bold ">Bistro Boss</a>
                        <br />
                        <a className=""><small className="w-[200px]">Restaurant</small></a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLInk}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;