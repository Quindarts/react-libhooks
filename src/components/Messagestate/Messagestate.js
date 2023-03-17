import React, { useState } from "react";
import Toast from "../UI/Toast";
function Messagestate() {
    const [message, setMessage] = useState("");
    return (
        <div>
            <input
                type="text"
                placeholder="fail"
                onChange={(e) => setMessage(e.target.value)}
            />
            {message && <Toast props={message} />}
        </div>
    );
}

export default Messagestate;
