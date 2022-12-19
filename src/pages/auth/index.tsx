import { useNavigate } from "react-router-dom"

import { useAppDispatch } from "store/hooks"
import { setLoggedIn, setUser } from "store/slices/root"

import { useTranslation } from "react-i18next"
import { Button, Input } from "shared/components/atoms"
import { ChangeEvent, useState } from "react"
import { SIGNIN } from "services/api/endpoints"
import { User } from "shared/types"
import { usePostRequest } from "shared/hooks/request"
import { signin } from "shared/hooks/utils/auth"

const AuthPage = () => {
    const { request } = usePostRequest<{ token: string; user: User }>({
        url: SIGNIN
    })

    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })

    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

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
                "w-full h-screen transition-all bg-orange-500 md:bg-gray-100 flex items-center justify-center"
            }>
            <section
                className={
                    "md:shadow-xl transition-all w-full md:w-[400px] p-6 bg-orange-500 md:rounded-xl"
                }>
                <section className={"h-16 flex items-center justify-center"}>
                    <h1 className={"text-4xl text-white"}>places.uz</h1>
                </section>

                <section className={"flex flex-col gap-5 mt-6"}>
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
                        "mt-10 flex gap-4 items-center flex-col justify-between"
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
