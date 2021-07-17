import React from "react"
import classNames from "classnames"
import Preloader from "../ComponentHelpers/Preloader";

interface Props {
    className: string,
    onClick?: () => void,
    disabled?: boolean,
    children: React.ReactNode
}

function Button({className, onClick, disabled, children}:Props) {

    const classes = classNames(
        'button',
        className
    )

    return (
        <>
            <button
                className={classes}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    );
}

export default Button