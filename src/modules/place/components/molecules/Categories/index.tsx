import { Dispatch, SetStateAction } from "react"
import cn from "classnames"
import { themes } from "shared/constants/themes"
import { Category } from "shared/types"

interface CategoriesProps {
    categories: Category[]
    activeCategory: Category
    setActiveCategory: Dispatch<SetStateAction<Category | null>>
    theme?: keyof typeof themes
}

export const Categories = ({
    categories,
    activeCategory,
    setActiveCategory,
    theme = "orange"
}: CategoriesProps) => {
    const handleCategoryClick = (category: Category) => {
        setActiveCategory(category)
    }

    return (
        <section
            className={"scrollbar-hide  flex w-full gap-2 overflow-x-auto"}>
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className={cn(
                        "min-w-fit break-keep rounded-full py-2 px-5 text-white",
                        {
                            "text-white": category.id === activeCategory.id,
                            "bg-none text-gray-800":
                                category.id !== activeCategory.id
                        },
                        themes[theme]
                    )}>
                    {category.name}
                </button>
            ))}
        </section>
    )
}
