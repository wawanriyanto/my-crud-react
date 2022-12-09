import React from "react";
import "../styles/Button.css"

type ButtonProps = {
    text:string,
    variant:string 
}

const Button = ({text,variant}:ButtonProps) =>{
    return(
        <button className={`btn btn-${variant}` }>{text}</button>
    )
}
export default Button
