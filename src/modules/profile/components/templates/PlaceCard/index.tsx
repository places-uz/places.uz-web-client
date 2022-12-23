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
                    className={"mb-4 flex w-full items-center justify-between"}>
                    {place.logo && (
                        <img
                            className={"h-12 rounded-lg bg-white p-2"}
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
                            "mt-1 cursor-pointer text-xs text-white opacity-80"
                        }>
                        @{place.url}
                    </span>
                </section>

                <section className={"mt-auto flex flex-col gap-2 pt-6"}>
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
                "flex animate-pulse flex-col rounded-xl bg-gray-200 p-6"
            }>
            <div className={"flex items-center justify-between"}>
                <div className={"h-12 w-12 rounded-lg bg-gray-300"} />

                <div className={"flex gap-2"}>
                    <div className={"h-8 w-8 rounded-md bg-gray-300"} />
                    <div className={"h-8 w-8 rounded-md bg-gray-300"} />
                    <div className={"h-8 w-8 rounded-md bg-gray-300"} />
                </div>
            </div>

            <div className={"mt-6 h-10 w-2/3 rounded-xl bg-gray-300"}></div>
            <div className={"mt-2 h-4 w-1/2 rounded-xl bg-gray-300"}></div>

            <div className={"mt-auto flex w-full flex-col gap-2 pt-4"}>
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
            className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}
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
