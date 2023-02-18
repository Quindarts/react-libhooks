import { Link } from "react-router-dom";
import React, { Fragment } from "react";
const Sidebar = () => {
    return (
        <Fragment>
            <h2 className="my-3 font-[500]">SIDERBAR Gildarts</h2>
            <div className="pt-3">
                <ul className="flex flex-row">
                    <li className="flex-1">
                        <Link to="/">CURD API</Link>
                    </li>
                    <li className="flex-1">
                        <Link to="/ex1">UI 1</Link>
                    </li>
                    <li className="flex-1">
                        <Link to="/ex2">UI 2</Link>
                    </li>
                    <li className="flex-1">
                        <Link to="/ex3">Profile</Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Sidebar;
