import React from "react";
import "../styles/Button.css"

type ButtonProps = {
    text:string,
    variant:string,
    action:any
}

const Button = ({text,variant,action}:ButtonProps) =>{ {/* action jadi parameter default */}
    return(
        <button className={`btn btn-${variant}` }onClick={action}>{text}</button>
    )
}
export default Button
