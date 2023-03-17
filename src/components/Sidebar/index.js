import { Link } from "react-router-dom";
import React, { Fragment } from "react";
const Sidebar = () => {
    return (
        <Fragment>
            <div className="pt-3">
                <ul className="flex flex-row">
                    <li className="flex-1">
                        <Link to="/">CURD API</Link>
                    </li>
                    <li className="flex-1">
                        <Link to="/message">Message state</Link>
                    </li>
                    <li className="flex-1">
                        <Link to="/flagSearchFilter">Flag search filter</Link>
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
