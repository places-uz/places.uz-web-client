import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Dialog } from "shared/components/molecules"
import { Button, Input } from "shared/components/atoms"
import type { Theme } from "shared/types"
import { usePostRequest } from "../../../../shared/hooks/request"

interface AddCategoryDialogProps {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    theme: Theme
    url: string
}

export const AddCategoryDialog = ({
    url,
    isOpen,
    setOpen,
    theme
}: AddCategoryDialogProps) => {
    const [formState, setFormState] = useState({
        name: ""
    })

    const { request: handleCategoryCreate } = usePostRequest({
        url: `places/${url}/categories`
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async () => {
        const { success } = await handleCategoryCreate({ data: formState })

        if (success) {
            alert("DONE")
        }
    }

    return (
        <Dialog isOpen={isOpen} setOpen={setOpen}>
            <h1 className={"font-semibold text-xl text-center"}>
                Add Category
            </h1>

            <section className={"flex mt-6 gap-4 flex-col"}>
                <Input
                    onChange={handleInputChange}
                    value={formState.name}
                    name={"name"}
                    hint={"Category name"}
                    hintColor={"black"}
                    size={"md"}
                />
            </section>

            <section className={"grid grid-cols-2 mt-6 gap-4"}>
                <Button onClick={() => setOpen(false)} type={"ghost-black"}>
                    Cancel
                </Button>

                <Button onClick={handleSubmit} type={"themed"} theme={theme}>
                    Create
                </Button>
            </section>
        </Dialog>
    )
}
