import React from "react";

function Login () {
    const [password, setPassword] = useState("");
    
    return (
        <div>
            <input
                type="password"
                placeholder="Enter password"
                value={password}
             
            />
        </div>
    )
}

export default Login;
