import cn from "classnames"
import { ChangeEvent } from "react"

interface TextAreaProps {
    hint?: string
    hintColor?: "black" | "white"
    placeholder?: string

    size?: "sm" | "md"

    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
    name?: string
    value?: string
}

export const TextArea = ({
    hint,
    placeholder,

    value,
    onChange,
    hintColor = "white",
    size = "md",
    name
}: TextAreaProps) => {
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

            <textarea
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                spellCheck={false}
                className={classes.base}
            />
        </div>
    )
}
