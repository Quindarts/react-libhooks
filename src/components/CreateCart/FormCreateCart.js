import React, { Fragment, useEffect, useRef } from "react";
import classes from "./AddCart.module.css";
const FormCreateCart = (props) => {
    const idPosts = useRef("");
    const emailPosts = useRef("");
    const namePosts = useRef("");
    const bodyPosts = useRef("");
    //Submit Form
    function handleSubmit(e) {
        e.preventDefault();
        const cart = {
            id: idPosts.current.value,
            email: emailPosts.current.value,
            name: namePosts.current.value,
            body: bodyPosts.current.value,
        };
        props.onAddCart(cart);
    }
    useEffect(() => {
        console.log("yes");
    }, []);
    return (
        <Fragment>
            <h1 className="p-[20px] font-[500]">Method Create Cart</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input
                        id="idPosts"
                        ref={idPosts}
                        type="text"
                        className={classes.control}
                    />
                </div>

                <div>
                    <label>EMAIL:</label>
                    <input
                        id="emailPosts"
                        ref={emailPosts}
                        type="text"
                        className={classes.control}
                    />
                </div>
                <div>
                    <label>NAME:</label>
                    <input
                        id="namePosts"
                        ref={namePosts}
                        type="text"
                        className={classes.control}
                    />
                </div>
                <div>
                    <label>BODY:</label>
                    <input
                        id="bodyPosts"
                        ref={bodyPosts}
                        type="text"
                        className={classes.control}
                    />
                </div>
                <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-zinc-100 px-3 py-2 rounded-sm">
                    Add Cart
                </button>
            </form>
        </Fragment>
    );
};
export default FormCreateCart;
