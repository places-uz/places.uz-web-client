import { Navigation } from "shared/components/templates"

const LandingPage = () => {
    return (
        <main className={"w-full relative flex flex-col max-w-7xl mx-auto"}>
            <Navigation className={"absolute"} />

            <section className={"w-full flex items-center h-screen px-12"}>
                <h1 className={"text-7xl font-bold text-orange-500"}>
                    Create beatiful menu <br /> For your restaurant
                </h1>
            </section>
        </main>
    )
}

export default LandingPage
