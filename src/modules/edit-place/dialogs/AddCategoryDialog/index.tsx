import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Dialog } from "shared/components/molecules"
import { Button, Input } from "shared/components/atoms"
import type { Theme } from "shared/types"

interface AddCategoryDialogProps {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    theme: Theme
}

export const AddCategoryDialog = ({
    isOpen,
    setOpen,
    theme
}: AddCategoryDialogProps) => {
    const [formState, setFormState] = useState({
        name: ""
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((p) => ({ ...p, [e.target.name]: e.target.value }))
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

                <Button type={"themed"} theme={theme}>
                    Create
                </Button>
            </section>
        </Dialog>
    )
}
