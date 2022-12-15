import { ChangeEvent, useMemo, useState } from "react"
import cn from "classnames"
import { useParams } from "react-router-dom"
import { PlusIcon } from "@heroicons/react/24/outline"

import { Place, Theme } from "shared/types"
import { themes } from "shared/constants/themes"

import { MOCK_DATA } from "data/mock"
import { Button, Input, TextArea } from "shared/components/atoms"
import { CategoryCard } from "modules/edit-place/components/templates"
import { AddCategoryDialog } from "modules/edit-place/dialogs"

const EditPlacePage = () => {
    const [isAddCategoryDialogOpened, setAddCategoryDialogOpened] =
        useState(false)
    const { slug } = useParams<{ slug: string }>()

    const place = useMemo<Place>(
        () => MOCK_DATA.find((place) => place.slug === slug) as Place,
        [slug]
    )

    const classes = {
        cover: cn("w-full h-64 rounded-xl mt-12 relative", themes[place.theme]),
        logo: cn(
            "w-36 h-36 border-2 rounded-full shadow-xl p-3 bg-white absolute transform left-1/2 -translate-x-1/2 overflow-hidden -bottom-16"
        )
    }

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
        <>
            <main className={"w-full max-w-4xl px-5 mx-auto"}>
                <section className={classes.cover}>
                    <div className={cn("w-full h-full absolute")} />
                    {place?.cover && (
                        <img
                            className={"w-full h-full object-cover rounded-xl"}
                            src={place.cover}
                            alt={place.name}
                        />
                    )}

                    <div className={classes.logo}>
                        {place?.logo && (
                            <img
                                className={
                                    "w-full rounded-full h-full object-cover"
                                }
                                src={place.logo}
                                alt={place.name}
                            />
                        )}
                    </div>
                </section>

                <section className={"mt-24"}>
                    <h1 className={"text-3xl font-semibold mb-6 border-b pb-4"}>
                        Main Information
                    </h1>

                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
                        <Input
                            onChange={handleInputChange}
                            name={"name"}
                            hintColor={"black"}
                            hint={"Place name"}
                            value={formState.name}
                        />

                        <Input
                            onChange={handleInputChange}
                            value={formState.slug}
                            name={"slug"}
                            hintColor={"black"}
                            hint={"Place slug"}
                        />

                        <Input
                            onChange={handleInputChange}
                            value={formState.phone}
                            name={"phone"}
                            hintColor={"black"}
                            hint={"Place phone"}
                        />

                        <Input
                            onChange={handleInputChange}
                            value={formState.address}
                            name={"address"}
                            hintColor={"black"}
                            hint={"Place address"}
                        />
                    </div>

                    <section className={"flex flex-col gap-2 mt-6"}>
                        <span className={"text-xs"}>Place theme</span>

                        <div
                            className={
                                "grid grid-cols-5 md:grid-cols-10 gap-4"
                            }>
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
                                            "shadow-lg":
                                                formState.theme === theme
                                        }
                                    )}
                                />
                            ))}
                        </div>
                    </section>
                </section>

                <section className={"mt-12"}>
                    <h1 className={"text-3xl font-semibold mb-6 border-b pb-4"}>
                        Secondary Information
                    </h1>

                    <div>
                        <TextArea
                            value={formState.information}
                            name={"information"}
                            hint={"Additional Info"}
                            hintColor={"black"}
                        />
                    </div>
                </section>

                <section className={"mt-12"}>
                    <div
                        className={
                            "flex items-center justify-between border-b pb-4 mb-6"
                        }>
                        <h1 className={"text-3xl font-semibold"}>Categories</h1>

                        <Button
                            onClick={() => setAddCategoryDialogOpened(true)}
                            icon={<PlusIcon width={20} height={20} />}
                            type={"themed"}
                            size={"xs"}
                            theme={formState.theme}>
                            Add Category
                        </Button>
                    </div>

                    <div className={"columns-1 md:columns-3 space-y-4"}>
                        {formState.categories?.map((category) => (
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
                isOpen={isAddCategoryDialogOpened}
                setOpen={setAddCategoryDialogOpened}
                theme={formState.theme}
            />
        </>
    )
}

export default EditPlacePage
