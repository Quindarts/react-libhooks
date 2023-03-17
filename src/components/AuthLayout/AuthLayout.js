import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getValueSessionStorage } from "../../utils/helpers";

function AuthLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = getValueSessionStorage("accessToken") || "";

        if (accessToken) {
            return navigate("/");
        }

        if (!location.pathname.includes("auth/")) {
            return navigate("/auth/login");
        }
    }, [location]);
    return (
        <div>
            AuthLayout
            <Outlet />
        </div>
    );
}

export default AuthLayout;
