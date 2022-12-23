import { ReactNode } from "react"
import cn from "classnames"

interface IconButtonProps {
    icon: ReactNode
    onClick?: () => void
    captionColor?: "red"
    size?: "sm" | "md"
    shadow?: "md" | "lg"

    className?: string
}

export const IconButton = ({
    icon,
    onClick,
    captionColor,
    size = "sm",
    shadow,
    className
}: IconButtonProps) => {
    const classes = {
        base: cn(
            "transition-opacity hover:opacity-90 rounded-lg bg-white",
            {
                "text-red-500": captionColor === "red"
            },
            {
                "p-2": size === "sm",
                "p-3": size === "md"
            },
            {
                "shadow-md": shadow === "md",
                "shadow-lg": shadow === "lg"
            },
            className
        )
    }

    return (
        <button onClick={onClick} className={classes.base}>
            {icon}
        </button>
    )
}
