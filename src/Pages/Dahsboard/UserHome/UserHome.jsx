import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="lg:text-2xl font-semibold">
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;