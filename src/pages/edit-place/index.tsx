import { ChangeEvent, useEffect, useState } from "react"
import cn from "classnames"
import { useParams } from "react-router-dom"
import { PlusIcon } from "@heroicons/react/24/outline"

import { Place, Theme } from "shared/types"
import { themes } from "shared/constants/themes"

import { Button, Input, TextArea } from "shared/components/atoms"
import { CategoryCard } from "modules/edit-place/components/templates"
import { AddCategoryDialog } from "modules/edit-place/dialogs"
import { useLoad, usePutRequest } from "shared/hooks/request"
import { PLACES } from "services/api/endpoints"
import { LoaderOverlay } from "shared/components/molecules"
import { formatters } from "shared/utils"

const EditPlacePage = () => {
    const { url } = useParams<{ url: string }>()

    const { request } = usePutRequest<Place>({
        url: `${PLACES}/${url}`
    })
    const { response: place, loading: isPlaceLoading } = useLoad<Place>({
        url: `${PLACES}/${url}`
    })

    const [isAddCategoryDialogOpened, setAddCategoryDialogOpened] =
        useState(false)

    const classes = {
        cover: cn(
            "w-full h-64 rounded-xl mt-12 relative",
            themes[place?.theme ?? "orange"]
        ),
        logo: cn(
            "w-36 h-36 border-2 rounded-full shadow-xl p-3 bg-white absolute transform left-1/2 -translate-x-1/2 overflow-hidden -bottom-16"
        )
    }

    const [formState, setFormState] = useState<Place | null>(null)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (formState !== null && place) {
            setFormState((p) => ({ ...p, [e.target.name]: e.target.value }))
        }
    }

    const handleThemeChange = (theme: Theme) => {
        setFormState((p) => ({ ...p, theme }))
    }

    useEffect(() => {
        if (place) {
            setFormState({ ...place })
        }
    }, [place])

    const handleReset = () => {
        if (place) {
            setFormState({ ...place })
        }
    }

    const handleSubmit = async () => {
        if (formState) {
            const { success } = await request({ data: formState })

            if (success) {
                alert("DONE")
            }
        }
    }

    return (
        <>
            <LoaderOverlay isLoading={isPlaceLoading} />
            <main className={"mx-auto w-full max-w-4xl px-5"}>
                <section className={classes.cover}>
                    <div className={cn("absolute h-full w-full")} />
                    {place?.cover && (
                        <img
                            className={"h-full w-full rounded-xl object-cover"}
                            src={formatters.addDomain(place.cover)}
                            alt={place.name}
                        />
                    )}

                    <div className={classes.logo}>
                        {place?.logo && (
                            <img
                                className={
                                    "h-full w-full rounded-full object-cover"
                                }
                                src={formatters.addDomain(place.logo)}
                                alt={place.name}
                            />
                        )}
                    </div>
                </section>

                <section className={"mt-24"}>
                    <h1 className={"mb-6 border-b pb-4 text-3xl font-semibold"}>
                        Main Information
                    </h1>

                    <div className={"grid grid-cols-1 gap-6 md:grid-cols-2"}>
                        <Input
                            onChange={handleInputChange}
                            name={"name"}
                            hintColor={"black"}
                            hint={"Place name"}
                            value={formState?.name}
                        />

                        <Input
                            onChange={handleInputChange}
                            value={formState?.url}
                            name={"url"}
                            hintColor={"black"}
                            hint={"Place URL"}
                        />

                        <Input
                            onChange={handleInputChange}
                            value={formState?.phone}
                            name={"phone"}
                            hintColor={"black"}
                            hint={"Place phone"}
                        />

                        <Input
                            onChange={handleInputChange}
                            value={formState?.address}
                            name={"address"}
                            hintColor={"black"}
                            hint={"Place address"}
                        />
                    </div>

                    <section className={"mt-6 flex flex-col gap-2"}>
                        <span className={"text-xs"}>Place theme</span>

                        <div
                            className={
                                "grid grid-cols-5 gap-4 md:grid-cols-10"
                            }>
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
                                            "shadow-lg":
                                                formState?.theme === theme
                                        }
                                    )}
                                />
                            ))}
                        </div>
                    </section>
                </section>

                <section className={"mt-12"}>
                    <h1 className={"mb-6 border-b pb-4 text-3xl font-semibold"}>
                        Secondary Information
                    </h1>

                    <div>
                        <TextArea
                            value={formState?.information}
                            name={"information"}
                            hint={"Additional Info"}
                            hintColor={"black"}
                        />
                    </div>

                    <section className={"mt-12 flex justify-end"}>
                        <div className={"flex gap-4"}>
                            <Button type={"ghost-black"} onClick={handleReset}>
                                Reset
                            </Button>

                            <Button onClick={handleSubmit}>Save</Button>
                        </div>
                    </section>
                </section>

                <section className={"mt-12"}>
                    <div
                        className={
                            "mb-6 flex items-center justify-between border-b pb-4"
                        }>
                        <h1 className={"text-3xl font-semibold"}>Categories</h1>

                        <Button
                            onClick={() => setAddCategoryDialogOpened(true)}
                            icon={<PlusIcon width={20} height={20} />}
                            type={"themed"}
                            size={"xs"}
                            theme={formState?.theme}>
                            Add Category
                        </Button>
                    </div>

                    <div className={"columns-1 space-y-4 md:columns-3"}>
                        {formState?.categories?.map((category) => (
                            <CategoryCard
                                key={category.id}
                                theme={formState.theme}
                                category={category}
                            />
                        ))}
                    </div>
                </section>

                <section className={"mt-12"}></section>
            </main>

            <AddCategoryDialog
                url={place?.url as string}
                isOpen={isAddCategoryDialogOpened}
                setOpen={setAddCategoryDialogOpened}
                theme={formState?.theme || "orange"}
            />
        </>
    )
}

export default EditPlacePage
