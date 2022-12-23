import { useNavigate } from "react-router-dom"
import { Button, Input } from "shared/components/atoms"
import { useTranslation } from "react-i18next"
import { ChangeEvent, useState } from "react"
import { usePostRequest } from "shared/hooks/request"
import { SIGNUP } from "services/api/endpoints"

const RegisterPage = () => {
    const { request } = usePostRequest({ url: SIGNUP })

    const [formState, setFormState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    const handleUserRegistration = async () => {
        const { success } = await request({ data: formState })

        if (success) {
            navigate("/auth")
        }
    }

    return (
        <main
            className={
                "flex h-screen w-full items-center justify-center bg-orange-500 transition-all md:bg-gray-100 md:px-5"
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
                        name={"first_name"}
                        hint={"First name"}
                    />
                    <Input
                        onChange={handleInputChange}
                        name={"last_name"}
                        hint={"Last name"}
                    />
                    <Input
                        onChange={handleInputChange}
                        name={"email"}
                        hint={"E-Mail"}
                        type={"email"}
                    />

                    <Input
                        onChange={handleInputChange}
                        name={"password"}
                        hint={"Password"}
                        type={"password"}
                    />
                </section>

                <section
                    className={
                        "mt-10 flex flex-col items-center justify-between gap-4"
                    }>
                    <Button
                        onClick={handleUserRegistration}
                        isFull={true}
                        size={"md"}
                        type={"primary-white"}>
                        {t("create_account")}
                    </Button>

                    <Button
                        onClick={() => navigate("/auth")}
                        isFull={true}
                        size={"md"}
                        type={"ghost-white"}>
                        {t("login")}
                    </Button>
                </section>
            </section>
        </main>
    )
}

export default RegisterPage
