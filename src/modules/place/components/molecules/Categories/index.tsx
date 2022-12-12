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
        <section className={"w-full flex flex-wrap  gap-2 rounded-full"}>
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className={cn(
                        "rounded-full text-white py-2 px-5",
                        {
                            "text-white": category.id === activeCategory.id,
                            "text-gray-800 bg-none":
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
