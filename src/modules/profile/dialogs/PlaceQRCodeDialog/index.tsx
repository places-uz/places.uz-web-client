import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react"
import { Dialog, QRCode } from "shared/components/molecules"
import { Theme } from "shared/constants/themes"
import { Button } from "shared/components/atoms"
import { Tabs } from "shared/components/atoms/Tabs"
import { DOM } from "shared/utils"

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
    const QRCodeRef = useRef<HTMLDivElement>(null)
    const [activeTab, setActiveTab] = useState(tabs[0])

    const handleDownloadQRCode = useCallback(() => {
        if (QRCodeRef.current !== null) {
            DOM.convertDOMElementToImage.toSVG(QRCodeRef.current, slug)
        }
    }, [QRCodeRef])

    return (
        <Dialog isOpen={isOpen} setOpen={setOpen}>
            <h1 className={"text-center text-xl font-semibold"}>
                Download QR Code
            </h1>

            <section className={"mt-4 flex w-full items-center justify-center"}>
                <Tabs
                    theme={theme}
                    size={"sm"}
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </section>

            <section className={"mt-6 flex items-center justify-center"}>
                <QRCode
                    themed={activeTab.value === "themed"}
                    ref={QRCodeRef}
                    theme={theme}
                    value={slug}
                />
            </section>

            <section className={"mt-6 grid grid-cols-2 gap-4"}>
                <Button onClick={() => setOpen(false)} type={"ghost-black"}>
                    Cancel
                </Button>

                <Button
                    onClick={handleDownloadQRCode}
                    type={"themed"}
                    theme={theme}>
                    Download
                </Button>
            </section>
        </Dialog>
    )
}
