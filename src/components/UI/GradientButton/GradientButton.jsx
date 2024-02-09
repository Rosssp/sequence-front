import cn from "classnames";
import React from "react";
import styles from "./gradientButton.module.scss";

export default function GradientButton({
    children,
    color,
    size,
    fs,
    img,
    style,
    ...props
}) {
    return (
        <button
            {...props}
            className={cn(
                styles.button,
                styles[style],
                styles[color],
                styles[size],
                styles[fs],
                styles[img === true && "buttonimg"]
            )}
        >
            {children}
        </button>
    );
}
