import React, { useState } from "react";

function GradeEvaluation () {
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

export default GradeEvaluation;
