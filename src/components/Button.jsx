import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import './Button.css'

export default ({label, operation, duble, triple, click}) => {
    let classes = 'button '
    classes += operation ? 'operation' : ""
    classes += duble ? 'duble' : ""
    classes += triple ? 'triple' : ""

    return (
        <button 
        onClick={() => click && click(label)}
        className={classes}>{label}
        </button>
    )
}
