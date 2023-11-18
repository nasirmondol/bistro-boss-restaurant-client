import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();
    if(loading || isAdminLoading){
        return <p className="text-center">Loading....</p>
    }
    if (user || isAdmin) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

   
};

export default AdminRoutes;