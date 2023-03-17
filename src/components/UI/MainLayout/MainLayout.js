import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar";
import "./style.css";
function MainLayout() {
    return (
        <div className="main">
            <Sidebar />
            <div className="main__css">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;
