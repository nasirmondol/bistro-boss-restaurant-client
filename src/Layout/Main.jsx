import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location.pathname);
    const noHeaderFooter = location.pathname.includes('login');
    return (
        <div>
           {noHeaderFooter || <Navbar></Navbar>}
            <Outlet />
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;