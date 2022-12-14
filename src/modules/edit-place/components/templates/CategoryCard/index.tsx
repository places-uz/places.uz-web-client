import { useState } from "react"
import cn from "classnames"
import { Cog6ToothIcon } from "@heroicons/react/24/outline"

import { Button, IconButton } from "shared/components/atoms"
import { Theme, themes } from "shared/constants/themes"
import { Category } from "shared/types"
import { CategorySettingsDialog } from "../../../dialogs"
import { useNavigate } from "react-router-dom"

interface CategoryCardProps {
    theme: Theme
    category: Category
}

export const CategoryCard = ({ category, theme }: CategoryCardProps) => {
    const navigate = useNavigate()

    const [isCategorySettingsDialogOpen, setCategorySettingsDialogOpen] =
        useState(false)

    const classes = {
        base: cn(
            "bg-gradient-to-tr w-full rounded-xl p-6 flex flex-col break-inside-avoid",
            themes[theme]
        )
    }

    const handleEditProducts = () => {
        navigate(`category/${category.id}`)
    }

    const handleCategoryDelete = () => {
        alert("Delete Category")
    }

    return (
        <>
            <article className={classes.base}>
                <section className={"flex flex-col"}>
                    <div className={"flex items-start justify-between gap-2"}>
                        <h2 className={"break-all text-3xl text-white"}>
                            {category.name}
                        </h2>
                        <IconButton
                            onClick={() => setCategorySettingsDialogOpen(true)}
                            icon={<Cog6ToothIcon width={20} height={20} />}
                        />
                    </div>
                    <span
                        className={
                            "mt-1 cursor-pointer text-xs text-white opacity-80"
                        }>
                        {category.products?.length} Products
                    </span>
                </section>

                <section className={"mt-6 flex flex-col gap-2"}>
                    <Button
                        size={"xs"}
                        onClick={handleEditProducts}
                        type={"primary-white"}
                        captionColor={"black"}>
                        Edit Products
                    </Button>

                    <Button
                        onClick={handleCategoryDelete}
                        captionColor={"red"}
                        size={"xs"}
                        type={"primary-white"}>
                        Delete Category
                    </Button>
                </section>
            </article>

            <CategorySettingsDialog
                theme={theme}
                isOpen={isCategorySettingsDialogOpen}
                setOpen={setCategorySettingsDialogOpen}
                category={category}
            />
        </>
    )
}
