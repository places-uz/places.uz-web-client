import { Suspense, ReactNode } from "react"
import { I18nextProvider } from "react-i18next"

import i18n from "i18n"

export const withI18n = (component: () => ReactNode) => () =>
    (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback="">{component()}</Suspense>
        </I18nextProvider>
    )
