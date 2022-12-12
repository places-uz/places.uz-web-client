import { ForwardedRef, forwardRef } from "react"
import { QRCode as QRCodeImage } from "react-qrcode-logo"
import cn from "classnames"

import { Theme, themes } from "shared/constants/themes"

interface IQRCodeProps {
    value: string
    theme: Theme
    themed?: boolean
}

export const QRCode = forwardRef(
    (
        { theme, value, themed }: IQRCodeProps,
        ref: ForwardedRef<HTMLDivElement>
    ) => {
        const classes = cn(
            "transition-all flex items-center p-8 rounded-xl justify-center w-72",

            {
                [themes[theme]]: themed === true
            }
        )

        return (
            <div ref={ref} className={classes}>
                <QRCodeImage
                    value={value}
                    qrStyle={"dots"}
                    eyeRadius={20}
                    bgColor={"transparent"}
                    fgColor={themed ? "white" : "black"}
                    size={200}
                />
            </div>
        )
    }
)
