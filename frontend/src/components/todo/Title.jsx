import React from "react";
import "./ToDo.scss"

function Title({ children, ...rest }) {
    return (
        
            <p className="title"{...rest}>{children}</p>
            
        
    );
}

export default Title;
