import React from "react";
import { Navigate } from "react-router-dom";
import { DashboardTemplate } from "../components/Dashboard";
import { getValueSessionStorage } from "../utils/helpers";

const PrivateRouter = () => {
    const token = getValueSessionStorage("accessToken") || "";
    return token ? <DashboardTemplate /> : <Navigate to="/auth/login" />;
};
export default PrivateRouter;
