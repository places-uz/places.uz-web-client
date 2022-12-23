import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Dialog } from "shared/components/molecules"
import { Button, Input } from "shared/components/atoms"
import type { Place, Theme } from "shared/types"
import { themes } from "shared/constants/themes"
import cn from "classnames"
import { usePostRequest } from "shared/hooks/request"
import { PLACES } from "services/api/endpoints"
import { ImagesSelect } from "../../components/templates"

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
            <h1 className={"text-center text-xl font-semibold"}>Add Place</h1>

            <section className={"mt-6 flex flex-col gap-4"}>
                <ImagesSelect />

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
                                    "h-12 w-full rounded-md transition-all",
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

            <section className={"mt-6 grid grid-cols-2 gap-4"}>
                <Button onClick={() => setOpen(false)} type={"ghost-black"}>
                    Cancel
                </Button>

                <Button onClick={handleSubmit}>Create</Button>
            </section>
        </Dialog>
    )
}
