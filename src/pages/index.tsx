import { Route, Routes } from "react-router-dom"
import { lazy } from "react"

const LandingPage = lazy(() => import("./landing"))
const AuthPage = lazy(() => import("./auth"))
const RegisterPage = lazy(() => import("./register"))
const ProfilePage = lazy(() => import("./profile"))
const PlacePage = lazy(() => import("./place"))

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/place/:slug" element={<PlacePage />} />
        </Routes>
    )
}
