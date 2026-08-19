import React, { useState } from "react";
import "./PasswordChecker.css";

function PasswordChecker() {
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");

    const PasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const CheckPassword = () => {
        if (password.length === 0) {
            setStatus("empty");
        } else if (password.length < 8) {
            setStatus("weak");
        } else if (password.length < 12) { 
            setStatus("medium");
        } else {
            setStatus("strong");
        }
    };

    const ClearButton = () => {
        setPassword("");
        setStatus("");
    };

    return (
        <div className="box">
            <div>
                <input
                    type="text"
                    placeholder="Enter password"
                    value={password}
                    className="passwordBox"
                    onChange={PasswordChange}
                />

                <p>Character Count: {password.length}</p>

                <button onClick={CheckPassword}>
                    Check Password
                </button>

                <button onClick={ClearButton}>
                    Clear
                </button>

                {status === "weak" && (
                    <div className="passwordStatus weak">
                        Status: Weak Password
                    </div>
                )}

                {status === "medium" && (
                    <div className="passwordStatus medium">
                        Status: Medium Password
                    </div>
                )}

                {status === "strong" && (
                    <div className="passwordStatus strong">
                        Status: Strong Password
                    </div>
                )}

                {status === "empty" && (
                    <div className="passwordStatus empty">
                        Please enter a password.
                    </div>
                )}
            </div>
        </div>
    );
}

export default PasswordChecker;