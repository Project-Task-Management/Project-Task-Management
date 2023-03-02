import React from "react";
import "./ToDo.scss"

function Title({ children, ...rest }) {
    return (
        
            <p className="title"{...rest}>{children}Todo Liste</p>
            
        
    );
}

export default Title;
