import { useState } from "react"
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
        navigate(`/place/${place.slug}`)
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
                            src={place.logo}
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
                        @{place.slug}
                    </span>
                </section>

                <section className={"flex flex-col gap-2 mt-6"}>
                    <Button captionColor={"black"} type={"primary-white"}>
                        {t("payments")}
                    </Button>

                    <Button type={"primary-white"} captionColor={"black"}>
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
                slug={place.slug}
            />
        </>
    )
}
