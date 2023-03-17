import React from "react";
import { Fragment, useEffect, useState } from "react";
import Cart from "./Cart";
import "./style.css";
import { getAllCart } from "../../services/axiosconfig";
import Loading from "../UI/Loading/Loading";

const CartTemplate = () => {
    const [state, setstate] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
        getAllCart()
            .then((cart) => {
                if (cart.status === 200) setstate(cart.data);
            })
            .catch((error) => {
                console.log(error);
            });
        setisLoading(true);
    }, []);
    return (
        <Fragment>
            <div>
                <h1 className="p-[20px] font-[500]">Method GET WITH AXIOS</h1>
                {!isLoading && <Loading />}
                {isLoading &&
                    state.map((item, index) => (
                        <Cart props={item} key={index} />
                    ))}
            </div>
        </Fragment>
    );
};
export default CartTemplate;
