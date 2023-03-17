import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import LoginTemplate from "./components/Auth/Login";
import RegisterTemplate from "./components/Auth/Register";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import { DashboardTemplate } from "./components/Dashboard";
import FlagFilterSearch from "./components/FlagFIlterSearch/FlageFilterSearch";
import Messagestate from "./components/Messagestate/Messagestate";
import MainLayout from "./components/UI/MainLayout/MainLayout";
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
                            <MainLayout />
                        )
                    }
                >
                    <Route index element={<DashboardTemplate />} />
                    <Route path="/message" element={<Messagestate />} />
                    <Route
                        path="/flagSearchFilter"
                        element={<FlagFilterSearch />}
                    />
                </Route>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginTemplate />} />
                </Route>
                <Route path="/auth/register" element={<RegisterTemplate />} />
            </Routes>
        </Fragment>
    );
}

export default App;
