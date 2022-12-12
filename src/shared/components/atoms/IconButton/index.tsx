import { ReactNode } from "react"

interface IconButtonProps {
    icon: ReactNode
    onClick?: () => void
}

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={
                "p-2 transition-opacity hover:opacity-90 rounded-lg bg-white"
            }>
            {icon}
        </button>
    )
}
