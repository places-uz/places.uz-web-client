import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Dialog } from "shared/components/molecules"
import { Button, Input } from "shared/components/atoms"
import type { Place, Theme } from "shared/types"
import { themes } from "shared/constants/themes"
import cn from "classnames"
import { usePostRequest } from "../../../../shared/hooks/request"
import { PLACES } from "../../../../services/api/endpoints"

interface AddPlaceDialogProps {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    handleSuccess: () => void
}

export const AddPlaceDialog = ({
    isOpen,
    setOpen,
    handleSuccess
}: AddPlaceDialogProps) => {
    const { request } = usePostRequest({
        url: `${PLACES}/`
    })

    const [formState, setFormState] = useState<Omit<Place, "id">>({
        name: "",
        phone: "",
        address: "",
        url: "",
        theme: "indigo"
    })

    const [images, setImages] = useState({
        logo: {
            file: File,
            src: ""
        },

        cover: {
            file: File,
            src: ""
        }
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    const handleThemeChange = (theme: Theme) => {
        setFormState((p) => ({ ...p, theme }))
    }

    const handleFileChoose = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            setImages((p) => ({
                ...p,
                [e.target.name]: {
                    file: e.target.files?.[0],
                    src:
                        e.target.files?.[0] &&
                        URL.createObjectURL(e.target.files[0])
                }
            }))
        }
    }

    const handleSubmit = async () => {
        const formData = new FormData()

        formData.append("name", formState.name)
        formData.append("phone", formState.phone)
        formData.append("address", formState.address)
        formData.append("url", formState.url)
        formData.append("theme", formState.theme)

        formData.append("logo", images.logo.file as any)
        formData.append("cover", images.cover.file as any)

        const { success } = await request({ data: formData })

        if (success) {
            setOpen(false)
            handleSuccess()
        }
    }

    return (
        <Dialog isOpen={isOpen} setOpen={setOpen}>
            <h1 className={"font-semibold text-xl text-center"}>Add Place</h1>

            <section className={"flex mt-6 gap-4 flex-col"}>
                <section
                    className={"w-full mb-8 flex items-center justify-center"}>
                    <div
                        className={
                            "w-full h-32 rounded-xl bg-gray-300 relative"
                        }>
                        <input
                            onChange={handleFileChoose}
                            name={"cover"}
                            type={"file"}
                            hidden
                            id={"cover"}
                        />
                        <input
                            onChange={handleFileChoose}
                            name={"logo"}
                            type={"file"}
                            hidden
                            id={"logo"}
                        />

                        <label htmlFor={"cover"}>
                            <img
                                src={images.cover.src}
                                className={
                                    "w-full object-cover rounded-xl h-full"
                                }
                            />
                        </label>

                        <label htmlFor={"logo"}>
                            <img
                                src={images.logo.src}
                                className={
                                    "w-24 h-24 object-cover absolute rounded-full bg-gray-200 -bottom-10 transform -translate-x-1/2 left-1/2"
                                }
                            />
                        </label>
                    </div>
                </section>

                <Input
                    onChange={handleInputChange}
                    name={"name"}
                    hint={"Place name"}
                    hintColor={"black"}
                    size={"sm"}
                />
                <Input
                    onChange={handleInputChange}
                    name={"url"}
                    hint={"Place URL"}
                    hintColor={"black"}
                    size={"sm"}
                />
                <Input
                    onChange={handleInputChange}
                    name={"phone"}
                    hint={"Place phone"}
                    hintColor={"black"}
                    size={"sm"}
                />
                <Input
                    onChange={handleInputChange}
                    name={"address"}
                    hint={"Place address"}
                    hintColor={"black"}
                    size={"sm"}
                />

                <section className={"flex flex-col gap-2"}>
                    <span className={"text-xs"}>Place theme</span>

                    <div className={"grid grid-cols-5 gap-2"}>
                        {Object.keys(themes).map((theme) => (
                            <button
                                key={theme}
                                onClick={() =>
                                    handleThemeChange(theme as Theme)
                                }
                                className={cn(
                                    "transition-all w-full h-12 rounded-md",
                                    themes[theme as Theme],
                                    {
                                        "shadow-lg": formState.theme === theme
                                    }
                                )}
                            />
                        ))}
                    </div>
                </section>
            </section>

            <section className={"grid grid-cols-2 mt-6 gap-4"}>
                <Button onClick={() => setOpen(false)} type={"ghost-black"}>
                    Cancel
                </Button>

                <Button onClick={handleSubmit}>Create</Button>
            </section>
        </Dialog>
    )
}
