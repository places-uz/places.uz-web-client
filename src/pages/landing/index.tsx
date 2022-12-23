import { Navigation } from "shared/components/templates"

const LandingPage = () => {
    return (
        <main className={"relative mx-auto flex w-full max-w-7xl flex-col"}>
            <Navigation className={"absolute"} />

            <section className={"flex h-screen w-full items-center px-12"}>
                <h1 className={"text-7xl font-bold text-orange-500"}>
                    Create beatiful menu <br /> For your restaurant
                </h1>
            </section>
        </main>
    )
}

export default LandingPage
