import React from "react";
import { Navigate } from "react-router-dom";
import { getValueSessionStorage } from "../utils/helpers";

const PrivateRouter = () => {
    const accessToken = getValueSessionStorage("accessToken") ;
    return accessToken ? {} : <Navigate to="auth/login" />;
};
export default PrivateRouter;
