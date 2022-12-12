import { useNavigate } from "react-router-dom"
import { Button, Input } from "shared/components/atoms"
import { useTranslation } from "react-i18next"
import { ChangeEvent, useState } from "react"
import { AUTH } from "../../services/api"

const RegisterPage = () => {
    const [formState, setFormState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password1: ""
    })

    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    const handleUserRegistration = async () => {
        try {
            const { data } = await AUTH.register({
                ...formState,
                password2: formState.password1
            })
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <main
            className={
                "w-full md:px-5 h-screen transition-all bg-orange-500 md:bg-gray-100 flex items-center justify-center"
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
                        name={"username"}
                        hint={"Username"}
                        type={"text"}
                    />
                    <Input
                        onChange={handleInputChange}
                        name={"password1"}
                        hint={"Password"}
                        type={"password"}
                    />
                </section>

                <section
                    className={
                        "mt-10 flex gap-4 items-center flex-col justify-between"
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
