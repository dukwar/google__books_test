import React from "react"
import classNames from "classnames"

interface Props {
    className: string,
    children: React.ReactNode
}

function Button({className, children}:Props) {

    const classes = classNames(
        'button',
        className
    )

    return (
        <>
            <button
                className={classes}>
                {children}
            </button>
        </>
    );
}

export default Button