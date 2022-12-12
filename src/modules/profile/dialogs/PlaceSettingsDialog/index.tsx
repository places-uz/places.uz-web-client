import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Dialog } from "shared/components/molecules"
import { Button, Input } from "shared/components/atoms"
import type { Place, Theme } from "shared/types"
import { themes } from "shared/constants/themes"
import cn from "classnames"

interface PlaceSettingsDialogProps {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>

    place: Omit<Place, "id">
}

export const PlaceSettingsDialog = ({
    isOpen,
    setOpen,
    place
}: PlaceSettingsDialogProps) => {
    const [formState, setFormState] = useState<Omit<Place, "id">>({
        ...place
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    const handleThemeChange = (theme: Theme) => {
        setFormState((p) => ({ ...p, theme }))
    }

    return (
        <Dialog isOpen={isOpen} setOpen={setOpen}>
            <h1 className={"font-semibold text-xl text-center"}>Edit Place</h1>

            <section className={"flex mt-6 gap-4 flex-col"}>
                <Input
                    onChange={handleInputChange}
                    value={formState.name}
                    name={"name"}
                    hint={"Place name"}
                    hintColor={"black"}
                    size={"sm"}
                />
                <Input
                    onChange={handleInputChange}
                    value={formState.slug}
                    name={"slug"}
                    hint={"Place slug"}
                    hintColor={"black"}
                    size={"sm"}
                />
                <Input
                    onChange={handleInputChange}
                    value={formState.phone}
                    name={"phone"}
                    hint={"Place phone"}
                    hintColor={"black"}
                    size={"sm"}
                />
                <Input
                    onChange={handleInputChange}
                    value={formState.address}
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

                <Button>Save</Button>
            </section>
        </Dialog>
    )
}