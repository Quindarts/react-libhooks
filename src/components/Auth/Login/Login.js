import React, { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../../UI/Toast";
const Login = (props) => {
    const navigate = useNavigate("");
    const userName = useRef("");
    const password = useRef("");
    const [isLogin, setIsLogin] = useState(false);
    console.log(document.querySelector("form"));
    function HandleSubmitLogin(event) {
        event.preventDefault();
        const dataLogin = {
            username: userName.current.value,
            password: password.current.value,
        };
        console.log(dataLogin);
        props.onGetPropsLogin(dataLogin);
    }

    const message = "success login";
    return (
        <Fragment>
            <div className="flex justify-center items-center h-[100vh]">
                <form
                    onSubmit={HandleSubmitLogin}
                    className="bg-slate-200 w-[500px] h-[500px] flex flex-col justify-center items-center rounded-md shadow-lg shadow-cyan-500/50"
                >
                    <p className="font-[600] text-[35px]">LOGIN</p>
                    <div className="my-3">
                        <label>UserName: </label>
                        <input type="text" ref={userName} />
                    </div>
                    <div className="my-3">
                        <label>Passwords: </label>
                        <input type="password" ref={password} />
                    </div>
                    <button
                        type="submit"
                        className="bg-cyan-500 shadow-lg shadow-cyan-500/50 ... px-5 py-2 rounded-md text-[white]"
                        onClick={() => {
                            setIsLogin(true);
                            navigate("/");
                        }}
                    >
                        Login
                    </button>
                    {isLogin && <Toast props={message} />}
                </form>
            </div>
        </Fragment>
    );
};
export default Login;
