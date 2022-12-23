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
    const { url } = useParams<{ url: string }>()

    const place = useMemo<Place>(
        () => MOCK_DATA.find((place) => place.url === url) as Place,
        [url]
    )

    const [activeCategory, setActiveCategory] = useState<Category | null>(
        place?.categories?.[0] ?? null
    )

    const classes = {
        cover: cn("w-full h-64 rounded-xl mt-12 relative", themes[place.theme]),
        logo: cn(
            "w-36 h-36 border-2 rounded-full shadow-xl p-3 bg-white absolute transform left-1/2 -translate-x-1/2 overflow-hidden -bottom-16"
        )
    }

    return (
        <main className={"mx-auto max-w-4xl px-5"}>
            <section className={classes.cover}>
                <div className={cn("absolute h-full w-full")} />
                {place?.cover && (
                    <img
                        className={"h-full w-full rounded-xl object-cover"}
                        src={place.cover}
                        alt={place.name}
                    />
                )}

                <div className={classes.logo}>
                    {place?.logo && (
                        <img
                            className={
                                "h-full w-full rounded-full object-cover"
                            }
                            src={place.logo}
                            alt={place.name}
                        />
                    )}
                </div>
            </section>

            <section className={"mt-24"}>
                <section className={"mb-6 flex flex-col border-b pb-4"}>
                    <h1 className={"mb-4  text-4xl font-semibold"}>
                        {place.name}
                    </h1>

                    <section className={"flex flex-wrap justify-between"}>
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

            <h1 className={"mt-10 mb-4 text-4xl font-semibold"}>Products</h1>

            <section
                className={
                    "sticky top-0 w-full border-t border-b bg-gray-100 pt-4 pb-4"
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
                    className={"mt-5 columns-1 gap-4 space-y-4 md:columns-2"}>
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
