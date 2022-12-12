import cn from "classnames"
import { ReactNode } from "react"
import { themes } from "shared/constants/themes"

interface ButtonProps {
    type?:
        | "primary"
        | "primary-white"
        | "ghost-white"
        | "ghost-black"
        | "themed"

    theme?: keyof typeof themes
    captionColor?: "primary" | "black"
    children: ReactNode
    shadow?: "none" | "lg" | "xl"
    size?: "sm" | "md" | "xs"
    isFull?: boolean
    icon?: ReactNode
    iconPosition?: "left" | "right"
    onClick?: () => void
    disabled?: boolean
}

export const Button = ({
    onClick,
    shadow = "none",
    disabled = false,
    type = "primary",
    iconPosition = "left",
    captionColor,
    isFull = false,
    size = "sm",
    theme = "orange",
    icon,
    children
}: ButtonProps) => {
    const classes = {
        base: cn(
            "transition-all flex gap-2 items-center justify-center rounded-lg",
            {
                "py-2 px-4 text-xs": size === "xs",
                "py-3 px-4 text-sm": size === "sm",
                "py-3.5 px-4": size === "md"
            },
            {
                "hover:bg-orange-600 bg-orange-500 text-white":
                    type === "primary",

                "hover:opacity-80 bg-white text-orange-500":
                    type === "primary-white",

                "hover:opacity-80 bg-transparent text-white":
                    type === "ghost-white",

                "hover:opacity-80 bg-transparent text-gray-800":
                    type === "ghost-black",

                "hover:opacity-80 text-white": type === "themed",
                [themes[theme]]: type === "themed" && theme
            },
            {
                "text-orange-500": captionColor === "primary",
                "text-gray-800": captionColor === "black"
            },
            {
                "shadow-lg": shadow === "lg",
                "shadow-xl": shadow === "xl",
                "shadow-none": shadow === "none"
            },
            {
                "w-full": isFull
            }
        )
    }

    return (
        <button disabled={disabled} onClick={onClick} className={classes.base}>
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
        </button>
    )
}
