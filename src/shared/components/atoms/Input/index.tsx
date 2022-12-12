import cn from "classnames"
import { ChangeEvent } from "react"

interface InputProps {
    hint?: string
    hintColor?: "black" | "white"
    placeholder?: string

    type?: "email" | "password" | "text" | "tel"
    size?: "sm" | "md"

    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    name?: string
    value?: string
}

export const Input = ({
    hint,
    placeholder,
    type = "text",
    value,
    onChange,
    hintColor = "white",
    size = "md",
    name
}: InputProps) => {
    const classes = {
        base: cn(
            "w-full text-sm rounded-lg transition-all bg-gray-100 outline-none px-4 border focus:border-orange-400",
            {
                "py-2": size === "sm",
                "py-3.5": size === "md"
            }
        )
    }

    return (
        <div className={"flex flex-col gap-2"}>
            {hint && (
                <span
                    className={cn("text-xs text-white", {
                        "text-white": hintColor === "white",
                        "text-gray-800": hintColor === "black"
                    })}>
                    {hint}
                </span>
            )}

            <input
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                spellCheck={false}
                type={type}
                className={classes.base}
            />
        </div>
    )
}
