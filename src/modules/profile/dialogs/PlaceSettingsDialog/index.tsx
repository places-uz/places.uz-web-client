import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Dialog } from "shared/components/molecules"
import { Button, Input } from "shared/components/atoms"
import type { Place, Theme } from "shared/types"
import { themes } from "shared/constants/themes"
import cn from "classnames"
import { ImagesSelect } from "../../components/templates"
import { formatters } from "shared/utils"

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
            <h1 className={"text-center text-xl font-semibold"}>Edit Place</h1>

            <section className={"mt-6 flex flex-col gap-4"}>
                <ImagesSelect
                    coverURL={formatters.addDomain(formState.cover as string)}
                    logoURL={formatters.addDomain(formState.logo as string)}
                />

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
                    value={formState.url}
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

                <Button>Save</Button>
            </section>
        </Dialog>
    )
}
