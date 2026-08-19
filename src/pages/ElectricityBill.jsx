import React, { useState } from "react";

function ElectricityBill () {
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

export default ElectricityBill;
