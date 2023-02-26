import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import LoginTemplate from "./components/Auth/Login";
import RegisterTemplate from "./components/Auth/Register";
import { DashboardTemplate } from "./components/Dashboard";
import { getValueSessionStorage } from "./utils/helpers";
function App() {
    return (
        <Fragment>
            <Routes>
                <Route
                    path="/"
                    element={
                        getValueSessionStorage("accessToken") === null ? (
                            <LoginTemplate />
                        ) : (
                            <DashboardTemplate />
                        )
                    }
                >
                    <Route index element={<DashboardTemplate />} />
                </Route>
                <Route path="/auth/register" element={<RegisterTemplate />} />
            </Routes>
        </Fragment>
    );
}

export default App;
