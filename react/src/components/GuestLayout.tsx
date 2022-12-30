import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const GuestLayout = () => {
    const { token } = useStateContext();
    console.log(token);

    if (token) {
        return <Navigate to={"/"} />;
    }

    return (
        <div>
            Guest Layout
            <Outlet />
        </div>
    );
};

export default GuestLayout;
