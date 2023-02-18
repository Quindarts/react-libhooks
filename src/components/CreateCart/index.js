import React, { Fragment, useState } from "react";
import FormCreateCart from "./FormCreateCart";
import { postCart } from "../../services/axiosconfig";
const FormCreateCartTemplate = () => {
    const [state, setState] = useState({});
    const [checkPost, setCheckPost] = useState(false);
    function addCartHandler(cart) {
        setState(cart);
        postCart(state)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        setCheckPost(true);
    }

    return (
        <Fragment>
            <FormCreateCart onAddCart={addCartHandler} />
            {checkPost && (
                <div className="body__Post bg-slate-100 w-[400px] h-[150px] p-4 border-2 border-gray-50">
                    <h1 className="text-center font-[600]">Post Data </h1>
                    <h1>id: {state.id}</h1>
                    <h1>email: {state.email}</h1>
                    <h1>name: {state.name}</h1>
                    <h1>body: {state.body}</h1>
                </div>
            )}
            {!checkPost && <p>Loading ....</p>}
        </Fragment>
    );
};
export default FormCreateCartTemplate;
