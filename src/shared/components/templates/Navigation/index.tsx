import {
    ArrowRightOnRectangleIcon,
    UserCircleIcon
} from "@heroicons/react/24/outline"
import { useAppSelector } from "store/hooks"

import { useNavigate } from "react-router-dom"
import cn from "classnames"
import { Button } from "../../atoms"

interface NavigationProps {
    className?: string
}

export const Navigation = ({ className }: NavigationProps) => {
    const navigate = useNavigate()
    const { isLoggedIn, user } = useAppSelector((state) => state.root)

    const classes = {
        base: cn("w-full flex items-center h-32 justify-between", className)
    }

    return (
        <nav className={classes.base}>
            <h1
                onClick={() => navigate("/")}
                className={"text-4xl cursor-pointer font-bold"}>
                places<span className={"text-orange-500"}>.uz</span>
            </h1>

            {isLoggedIn && user && (
                <Button
                    onClick={() => navigate("/profile")}
                    shadow={"lg"}
                    icon={<UserCircleIcon width={20} height={20} />}>
                    {user.first_name} {user.last_name[0]}.
                </Button>
            )}

            {!isLoggedIn && (
                <Button
                    onClick={() => navigate("/auth")}
                    shadow={"lg"}
                    icon={<ArrowRightOnRectangleIcon width={20} height={20} />}>
                    Sign In
                </Button>
            )}
        </nav>
    )
}
