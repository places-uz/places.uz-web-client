import React, { useState } from "react"
import { Navigate } from "react-router-dom"

import { PlusIcon } from "@heroicons/react/24/outline"
import { Footer, Navigation } from "shared/components/templates"
import {
    PlaceCard,
    PlaceCardSkeletonList
} from "modules/profile/components/templates"
import { useAppSelector } from "store/hooks"
import { useTranslation } from "react-i18next"
import { Button } from "shared/components/atoms"
import { AddPlaceDialog } from "modules/profile/dialogs"

import { useLoad } from "shared/hooks/request"
import { PLACES } from "services/api/endpoints"
import { Place } from "shared/types"
import { Transition } from "@headlessui/react"

const HomePage = () => {
    const { isLoggedIn } = useAppSelector((state) => state.root)

    if (!isLoggedIn) return <Navigate to={"/auth"} />

    const { t } = useTranslation()
    const [isCreateDialogOpen, setCreateDialogOpen] = useState(false)

    const {
        response: placesList,
        loading,
        request
    } = useLoad<Place[]>({ url: PLACES })

    const handleCreateSuccess = async () => {
        await request()
    }

    return (
        <>
            <main className={"mx-auto max-w-5xl px-5 xl:px-0"}>
                <Navigation />

                <section className={"mt-6 flex flex-col"}>
                    <div
                        className={
                            "mb-6 flex items-center justify-between border-b pb-6"
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

                    <div className={"mb-12"}>
                        <Transition
                            as={"div"}
                            show={!loading}
                            className={
                                "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                            }
                            enter="transition transition-all duration-[400ms] delay-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="duration-200 transition transition-all ease-in-out"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            {!loading &&
                                placesList?.map((place) => (
                                    <PlaceCard key={place.id} place={place} />
                                ))}
                        </Transition>

                        <PlaceCardSkeletonList isLoading={loading} />
                    </div>
                </section>

                <Footer />
            </main>

            <AddPlaceDialog
                handleSuccess={handleCreateSuccess}
                isOpen={isCreateDialogOpen}
                setOpen={setCreateDialogOpen}
            />
        </>
    )
}

export default HomePage
