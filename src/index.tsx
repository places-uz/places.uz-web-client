import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import App from "app"
import "./i18n"

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>
)
