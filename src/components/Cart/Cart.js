import React from "react";
const Cart = (prop) => {
    const { props } = prop;
    return (
        <div className="Cart__css">
            <h1 className="Cart__id font-[600]">ID: {props.id}</h1>
            <h1 className="Cart__email">EMAIL: {props.email}</h1>
            <h1 className="Cart__name">NAME: {props.name}</h1>
            <h1 className="Cart__body">BODY: {props.body}</h1>
            <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-zinc-100 px-3 py-2 rounded-sm Cart__delete">
                Delete
            </button>
        </div>
    );
};
export default Cart;
