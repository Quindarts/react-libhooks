import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import LoginTemplate from "./components/Auth/Login";
import { DashboardTemplate } from "./components/Dashboard";
function App() {
    return (
        <Fragment>
            <Routes>
                    <Route index element={<DashboardTemplate />} />
                <Route path="/auth/login" element={<LoginTemplate />} />
            </Routes>
        </Fragment>
    );
}

export default App;
