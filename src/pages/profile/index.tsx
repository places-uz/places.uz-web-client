import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

import { PlusIcon } from "@heroicons/react/24/outline"
import { Footer, Navigation } from "shared/components/templates"
import { PlaceCard } from "modules/profile/components/templates"
import { useAppSelector } from "store/hooks"
import { useTranslation } from "react-i18next"
import { Button } from "shared/components/atoms"
import { AddPlaceDialog } from "modules/profile/dialogs"

import { MOCK_DATA } from "../../data/mock"

const HomePage = () => {
    const { isLoggedIn } = useAppSelector((state) => state.root)

    if (!isLoggedIn) return <Navigate to={"/auth"} />

    const { t } = useTranslation()
    const [isCreateDialogOpen, setCreateDialogOpen] = useState(false)

    return (
        <>
            <main className={"max-w-5xl px-5 xl:px-0 mx-auto"}>
                <Navigation />

                <section className={"flex flex-col mt-6"}>
                    <div
                        className={
                            "mb-6 flex justify-between border-b pb-6 items-center"
                        }>
                        <h1 className={"text-3xl font-semibold text-gray-800"}>
                            {t("places")}
                        </h1>

                        <Button
                            onClick={() => setCreateDialogOpen(true)}
                            shadow={"lg"}
                            type={"primary-white"}
                            iconPosition={"right"}
                            icon={<PlusIcon width={20} height={20} />}>
                            {t("add_place")}
                        </Button>
                    </div>

                    <section
                        className={
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                        }>
                        {MOCK_DATA.map((place) => (
                            <PlaceCard key={place.id} place={place} />
                        ))}
                    </section>
                </section>

                <Footer />
            </main>

            <AddPlaceDialog
                isOpen={isCreateDialogOpen}
                setOpen={setCreateDialogOpen}
            />
        </>
    )
}

export default HomePage
