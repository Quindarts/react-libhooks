import React, { Fragment } from "react";
import CartTemplate from "../Cart";
import FormCreateCartTemplate from "../CreateCart";
import HeaderTemplate from "../Header";
import Sidebar from "../Sidebar";

export const DashboardTemplate = () => {
    return (
        <Fragment>
            <div className="col-2 bg-slate-100">
                <Sidebar />
                <button
                    onClick={() => {
                        sessionStorage.removeItem("accessToken");
                        location.reload();
                    }}
                >
                    Logout
                </button>
            </div>
            <HeaderTemplate />
            <div className="flex ">
                <div className="flex-1 w-64 bg-slate-50 p-4">
                    <CartTemplate />
                </div>
                <div className="flex-1 w-32 h-[500px] bg-slate-300 p-4">
                    <FormCreateCartTemplate />
                </div>
            </div>
        </Fragment>
    );
};
