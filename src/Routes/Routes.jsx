import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dahsboard/Cart/Cart";
import AllUsers from "../Pages/Dahsboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dahsboard/AddItems/AddItems";
import AdminRoutes from "../PrivateRoute/AdminRoutes";
import ManageUsers from "../Pages/Dahsboard/ManageUsers/ManageUsers";
import UpdateMenu from "../Pages/Dahsboard/UpdateMenu/UpdateMenu";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal routes
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            // admin routes
            {
                path: 'addItems',
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            },
            {
                path: 'users',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: 'manage',
                element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
            },
            {
                path: 'updatemenu/:id',
                element: <AdminRoutes><UpdateMenu></UpdateMenu></AdminRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
])
export default router;