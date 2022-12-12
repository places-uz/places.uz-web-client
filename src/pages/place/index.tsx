import { useMemo, useState } from "react"
import { ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import cn from "classnames"

import { Button } from "shared/components/atoms"
import { Product } from "modules/place/components/templates"
import { useParams } from "react-router-dom"

import { Category, Place } from "shared/types"
import { Categories } from "modules/place/components/molecules"
import { themes } from "shared/constants/themes"

import { MOCK_DATA } from "data/mock"

const PlacePage = () => {
    const { slug } = useParams<{ slug: string }>()

    const place = useMemo<Place>(
        () => MOCK_DATA.find((place) => place.slug === slug) as Place,
        [slug]
    )

    const [activeCategory, setActiveCategory] = useState<Category | null>(
        place?.categories?.[0] ?? null
    )

    const classes = {
        cover: cn("w-full h-64 rounded-xl mt-12 relative", themes[place.theme]),
        logo: cn(
            "w-36 h-36 rounded-full shadow-xl p-3 bg-white absolute transform left-1/2 -translate-x-1/2 overflow-hidden -bottom-16"
        )
    }

    return (
        <main className={"max-w-4xl px-5 mx-auto"}>
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
                <section className={"flex flex-col border-b pb-4 mb-6"}>
                    <h1 className={"text-4xl  font-semibold mb-4"}>
                        {place.name}
                    </h1>

                    <section className={"flex justify-between flex-wrap"}>
                        <div className={"flex items-center gap-4"}>
                            <Button
                                type={"themed"}
                                theme={place.theme}
                                size={"xs"}
                                icon={<MapPinIcon width={18} height={18} />}>
                                {place.address}
                            </Button>

                            <Button
                                type={"themed"}
                                theme={place.theme}
                                size={"xs"}
                                icon={<PhoneIcon width={18} height={18} />}>
                                {place.phone}
                            </Button>
                        </div>

                        {place.work_hours && (
                            <Button
                                type={"ghost-black"}
                                disabled={true}
                                theme={place.theme}
                                size={"md"}
                                icon={<ClockIcon width={18} height={18} />}>
                                {place.work_hours.from} - {place.work_hours.to}
                            </Button>
                        )}
                    </section>
                </section>

                {place.information && (
                    <section>
                        <p>{place.information}</p>
                    </section>
                )}
            </section>

            <h1 className={"text-4xl mt-10 mb-4 font-semibold"}>Menu</h1>

            <section
                className={
                    "border-t sticky top-0 bg-gray-100 border-b pt-4 pb-4"
                }>
                {place.categories && activeCategory && (
                    <Categories
                        theme={place.theme}
                        categories={place.categories}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                )}
            </section>

            {activeCategory && (
                <section
                    className={"columns-1 md:columns-2 space-y-4 gap-4 mt-5"}>
                    {activeCategory.products?.map((product) => (
                        <Product
                            key={product.id}
                            theme={place.theme}
                            product={product}
                        />
                    ))}
                </section>
            )}

            <section className={"mt-32"}></section>
        </main>
    )
}

export default PlacePage
