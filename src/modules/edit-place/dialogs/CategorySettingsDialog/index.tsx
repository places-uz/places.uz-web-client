import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Dialog } from "shared/components/molecules"
import { Button, Input } from "shared/components/atoms"
import type { Category, Theme } from "shared/types"

interface CategorySettingsDialogProps {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    theme: Theme

    category: Omit<Category, "id">
}

export const CategorySettingsDialog = ({
    isOpen,
    setOpen,
    theme,
    category
}: CategorySettingsDialogProps) => {
    const [formState, setFormState] = useState<Omit<Category, "id">>({
        ...category
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    return (
        <Dialog isOpen={isOpen} setOpen={setOpen}>
            <h1 className={"text-center text-xl font-semibold"}>
                Edit Category
            </h1>

            <section className={"mt-6 flex flex-col gap-4"}>
                <Input
                    onChange={handleInputChange}
                    value={formState.name}
                    name={"name"}
                    hint={"Category name"}
                    hintColor={"black"}
                    size={"md"}
                />
            </section>

            <section className={"mt-6 grid grid-cols-2 gap-4"}>
                <Button onClick={() => setOpen(false)} type={"ghost-black"}>
                    Cancel
                </Button>

                <Button type={"themed"} theme={theme}>
                    Save
                </Button>
            </section>
        </Dialog>
    )
}
