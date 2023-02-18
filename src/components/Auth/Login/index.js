import React from "react";
import { postLogin } from "../../../services/axiosconfig";
import { setValueSessionStorage } from "../../../utils/helpers";
import Login from "./Login";
const LoginTemplate = () => {
    function getDataLogin(dataLogin) {
        const dataEx = JSON.stringify(dataLogin);
        postLogin(dataEx)
            .then((res) => {
                console.log(res);
                res.status ===200 ? setValueSessionStorage("accessToken",res.data.token) : {};
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return <Login onGetPropsLogin={getDataLogin} />;
};
export default LoginTemplate;
