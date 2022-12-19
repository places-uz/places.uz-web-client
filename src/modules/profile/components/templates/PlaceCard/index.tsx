import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import cn from "classnames"
import { useTranslation } from "react-i18next"
import {
    ArrowUpRightIcon,
    Cog6ToothIcon,
    QrCodeIcon
} from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

import { Button, IconButton } from "shared/components/atoms"
import { themes } from "shared/constants/themes"
import { PlaceSettingsDialog, PlaceQRCodeDialog } from "../../../dialogs"
import { Place } from "shared/types"
import { domain } from "shared/hooks/utils/request"

interface PlaceCardProps {
    place: Omit<Place, "id">
}

export const PlaceCard = ({ place }: PlaceCardProps) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const [isPlaceSettingsDialogOpen, setPlaceSettingsDialogOpen] =
        useState(false)

    const [isPlaceQRCodeDialogOpen, setPlaceQRCodeDialogOpen] = useState(false)

    const classes = {
        base: cn(
            "bg-gradient-to-tr w-full rounded-xl p-6 flex flex-col",
            themes[place.theme]
        )
    }

    const handleSlugClick = () => {
        navigate(`/place/${place.url}`)
    }

    const handlePlaceEdit = () => {
        navigate(`/edit/${place.url}`)
    }

    return (
        <>
            <article className={classes.base}>
                <section
                    className={"flex w-full justify-between items-center mb-4"}>
                    {place.logo && (
                        <img
                            className={"h-12 rounded-lg p-2 bg-white"}
                            alt={place.name}
                            src={`${domain}${place.logo}`}
                        />
                    )}

                    <div className={"flex gap-1"}>
                        <IconButton
                            onClick={() => setPlaceSettingsDialogOpen(true)}
                            icon={<Cog6ToothIcon width={20} height={20} />}
                        />
                        <IconButton
                            onClick={() => setPlaceQRCodeDialogOpen(true)}
                            icon={<QrCodeIcon width={20} height={20} />}
                        />

                        <IconButton
                            onClick={handleSlugClick}
                            icon={<ArrowUpRightIcon width={20} height={20} />}
                        />
                    </div>
                </section>

                <section className={"flex flex-col"}>
                    <h2 className={"text-4xl text-white"}>{place.name}</h2>
                    <span
                        onClick={handleSlugClick}
                        className={
                            "text-xs mt-1 cursor-pointer opacity-80 text-white"
                        }>
                        @{place.url}
                    </span>
                </section>

                <section className={"flex flex-col gap-2 mt-auto pt-6"}>
                    <Button captionColor={"black"} type={"primary-white"}>
                        {t("payments")}
                    </Button>

                    <Button
                        onClick={handlePlaceEdit}
                        type={"primary-white"}
                        captionColor={"black"}>
                        Edit place
                    </Button>
                </section>
            </article>

            <PlaceSettingsDialog
                setOpen={setPlaceSettingsDialogOpen}
                isOpen={isPlaceSettingsDialogOpen}
                place={place}
            />

            <PlaceQRCodeDialog
                setOpen={setPlaceQRCodeDialogOpen}
                isOpen={isPlaceQRCodeDialogOpen}
                theme={place.theme}
                slug={place.url}
            />
        </>
    )
}

export const PlaceCardSkeleton = () => {
    return (
        <article
            className={
                "p-6 bg-gray-200 rounded-xl flex flex-col animate-pulse"
            }>
            <div className={"flex justify-between items-center"}>
                <div className={"w-12 h-12 rounded-lg bg-gray-300"} />

                <div className={"flex gap-2"}>
                    <div className={"w-8 h-8 rounded-md bg-gray-300"} />
                    <div className={"w-8 h-8 rounded-md bg-gray-300"} />
                    <div className={"w-8 h-8 rounded-md bg-gray-300"} />
                </div>
            </div>

            <div className={"w-2/3 h-10 rounded-xl mt-6 bg-gray-300"}></div>
            <div className={"w-1/2 h-4 rounded-xl mt-2 bg-gray-300"}></div>

            <div className={"w-full pt-4 mt-auto flex flex-col gap-2"}>
                <div className={"h-10 rounded-md bg-gray-300"} />
                <div className={"h-10 rounded-md bg-gray-300"} />
            </div>
        </article>
    )
}

interface PlaceCardSkeletonListProps {
    isLoading: boolean
}
export const PlaceCardSkeletonList = ({
    isLoading
}: PlaceCardSkeletonListProps) => {
    return (
        <Transition
            show={isLoading}
            className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}
            enter="transition duration-[400ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 transition ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <PlaceCardSkeleton />
            <PlaceCardSkeleton />
            <PlaceCardSkeleton />
        </Transition>
    )
}
