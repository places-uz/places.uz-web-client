import { Dispatch, SetStateAction, useState } from "react"
import { Dialog, QRCode } from "shared/components/molecules"
import { Theme } from "shared/constants/themes"
import { Button } from "shared/components/atoms"
import { Tabs } from "shared/components/atoms/Tabs"

interface PlaceQRCodeDialogProps {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>

    theme: Theme
    slug: string
}

const tabs = [
    {
        value: "themed",
        label: "Themed"
    },
    {
        value: "plain",
        label: "Plain"
    }
]

export const PlaceQRCodeDialog = ({
    isOpen,
    setOpen,

    theme,
    slug
}: PlaceQRCodeDialogProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0])

    return (
        <Dialog isOpen={isOpen} setOpen={setOpen}>
            <h1 className={"font-semibold text-xl text-center"}>
                Download QR Code
            </h1>

            <section className={"flex w-full mt-4 items-center justify-center"}>
                <Tabs
                    theme={theme}
                    size={"sm"}
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </section>

            <section className={"flex items-center mt-6 justify-center"}>
                <QRCode
                    value={slug}
                    theme={theme}
                    themed={activeTab.value === "themed"}
                />
            </section>

            <section className={"grid grid-cols-2 mt-6 gap-4"}>
                <Button onClick={() => setOpen(false)} type={"ghost-black"}>
                    Cancel
                </Button>

                <Button type={"themed"} theme={theme}>
                    Download
                </Button>
            </section>
        </Dialog>
    )
}
