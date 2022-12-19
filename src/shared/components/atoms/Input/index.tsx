import cn from "classnames"
import { ChangeEvent, useState } from "react"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"

interface InputProps {
    hint?: string
    hintColor?: "black" | "white"
    placeholder?: string

    type?: "email" | "password" | "text" | "tel"
    size?: "sm" | "md"

    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    name?: string
    value?: string

    validate?: (e: ChangeEvent<HTMLInputElement>) => string | null
}

export const Input = ({
    hint,
    placeholder,
    type = "text",
    value,
    onChange,
    hintColor = "white",
    size = "md",
    name,
    validate
}: InputProps) => {
    const [error, setError] = useState<string | null>(null)

    const classes = {
        base: cn(
            "w-full text-sm rounded-lg transition-all bg-gray-100 outline-none px-4 border focus:border-orange-400",
            {
                "py-2": size === "sm",
                "py-3.5": size === "md"
            }
        ),

        errorIcon: cn(
            "absolute right-3 top-1/2 mt-0.5 text-red-500 transition-all",
            {
                "opacity-0": !error
            }
        )
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)

        const validationResult = validate?.(e)

        if (validationResult) {
            setError(validationResult)
        }
    }

    return (
        <div className={"flex flex-col relative gap-2"}>
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
                onChange={handleChange}
                placeholder={placeholder}
                spellCheck={false}
                type={type}
                className={classes.base}
            />

            <ExclamationCircleIcon
                className={classes.errorIcon}
                width={20}
                height={20}
            />
        </div>
    )
}
