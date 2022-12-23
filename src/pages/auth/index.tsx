import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { useAppDispatch } from "store/hooks"
import { setLoggedIn, setUser } from "store/slices/root"
import { Button, Input } from "shared/components/atoms"
import { SIGNIN } from "services/api/endpoints"
import type { User } from "shared/types"
import { usePostRequest } from "shared/hooks/request"
import { signin } from "shared/hooks/utils/auth"

const AuthPage = () => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { request } = usePostRequest<{ token: string; user: User }>({
        url: SIGNIN
    })

    const [formState, setFormState] = useState({
        password: "",
        email: ""
    })

    const handleLogin = async () => {
        const { response } = await request({ data: formState })

        if (response) {
            signin(response)
            navigate("/profile")
            dispatch(setLoggedIn())
            dispatch(setUser(response.user))
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    return (
        <main
            className={
                "flex h-screen w-full items-center justify-center bg-orange-500 transition-all md:bg-gray-100"
            }>
            <section
                className={
                    "w-full bg-orange-500 p-6 transition-all md:w-[400px] md:rounded-xl md:shadow-xl"
                }>
                <section className={"flex h-16 items-center justify-center"}>
                    <h1 className={"text-4xl text-white"}>places.uz</h1>
                </section>

                <section className={"mt-6 flex flex-col gap-5"}>
                    <Input
                        onChange={handleInputChange}
                        name={"email"}
                        hint={"E-Mail"}
                    />

                    <Input
                        onChange={handleInputChange}
                        name={"password"}
                        type={"password"}
                        hint={"Password"}
                    />
                </section>

                <section
                    className={
                        "mt-10 flex flex-col items-center justify-between gap-4"
                    }>
                    <Button
                        onClick={handleLogin}
                        isFull={true}
                        size={"md"}
                        shadow={"lg"}
                        type={"primary-white"}>
                        {t("login")}
                    </Button>

                    <Button
                        onClick={() => navigate("/register")}
                        isFull={true}
                        size={"md"}
                        type={"ghost-white"}>
                        {t("create_account")}
                    </Button>
                </section>
            </section>
        </main>
    )
}

export default AuthPage
