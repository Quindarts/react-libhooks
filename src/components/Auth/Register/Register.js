import React, { Fragment, useState } from "react";
export default function Register() {
    const [isPassword, setIsPassword] = useState("");
    const [isUser, setIsUser] = useState("");
    const [isConfirmPassword, setIsConfirmPassword] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const message = {
        error: "Error validate",
        success: "Succes validae",
    };
    const formRegister = {
        email: isEmail,
        userName: isUser,
        password: isPassword,
        confirmpassword: isConfirmPassword,
    };
    return (
        <Fragment>
            <div className="flex justify-center items-center h-[100vh[">
                <form className="bg-slate-200 w-[500px] h-[500px] flex flex-col justify-center items-center rounded-md shadow-lg shadow-cyan-500/50">
                    <p className="font-[600] text-[35px]">Register</p>
                    <div className="my-3 w-[15rem]">
                        <p className="font-[600]">UserName: </p>
                        <input
                            className="border-solid border-2 border-cyan-600 rounded-md p-2"
                            type="text"
                            placeholder="Enter your Register"
                            onChange={(event) => setIsUser(event.target.value)}
                        />
                    </div>
                    <div className="my-3 w-[15rem]">
                        <p className="font-[600]">Email: </p>
                        <input
                            className="border-solid border-2 border-cyan-600 rounded-md p-2"
                            type="text"
                            placeholder="Enter your Register"
                            onChange={(event) => setIsEmail(event.target.value)}
                        />
                    </div>
                    <div className="my-3 w-[15rem]">
                        <p className="font-[600]">Passwords: </p>
                        <input
                            className="border-solid border-2 border-cyan-600 rounded-md p-2"
                            type="password"
                            placeholder="Enter your Register"
                            onChange={(event) =>
                                setIsPassword(event.target.value)
                            }
                        />
                    </div>
                    <div className="my-3 w-[15rem]">
                        <p className="font-[600]">
                            Confirms Passwords:{" "}
                        </p>
                        <input
                            className="border-solid border-2 border-cyan-600 rounded-md p-2"
                            type="password"
                            placeholder="Enter your Register"
                            onChange={(event) =>
                                setIsConfirmPassword(event.target.value)
                            }
                        />
                    </div>
                    <button
                        type=""
                        className="bg-cyan-500 shadow-lg shadow-cyan-500/50 ... px-5 py-2 rounded-md text-[white]"
                        onClick={() => {
                            console.log(formRegister);
                        }}
                    >
                        Register
                    </button>
                </form>
                <button
                    type=""
                    className="bg-cyan-500 shadow-lg shadow-cyan-500/50 ... px-5 py-2 rounded-md text-[white]"
                    onClick={() => {
                        console.log(formRegister);
                    }}
                >
                    Register
                </button>
            </div>
        </Fragment>
    );
}
