import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const DefaultLayout = () => {
    const { user, token } = useStateContext();
    console.log(token);

    if (!token) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div>
            Default Layout
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
