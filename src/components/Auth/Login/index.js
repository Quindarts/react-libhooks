import React, { Fragment } from "react";
import { postLogin } from "../../../services/axiosconfig";
import { setValueSessionStorage } from "../../../utils/helpers";
import Login from "./Login";
const LoginTemplate = () => {
    function getDataLogin(dataLogin) {
        const dataEx = JSON.stringify(dataLogin);
        postLogin(dataEx)
            .then((res) => {
                if (res.status === 200) {
                    setValueSessionStorage("accessToken", res.data.token);
                    location.reload();
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <Fragment>
            <Login onGetPropsLogin={getDataLogin} />
        </Fragment>
    );
};
export default LoginTemplate;
