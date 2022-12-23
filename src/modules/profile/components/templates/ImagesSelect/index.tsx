interface ImagesSelectProps {
    coverURL?: string
    logoURL?: string
}

export const ImagesSelect = ({ coverURL, logoURL }: ImagesSelectProps) => {
    return (
        <section className={"mb-8 flex w-full items-center justify-center"}>
            <div className={"relative h-32 w-full rounded-xl bg-gray-300"}>
                <input name={"cover"} type={"file"} hidden id={"cover"} />
                <input name={"logo"} type={"file"} hidden id={"logo"} />

                <label htmlFor={"cover"}>
                    <img
                        src={coverURL}
                        className={"h-full w-full rounded-xl object-cover"}
                    />
                </label>

                <label htmlFor={"logo"}>
                    <img
                        src={logoURL}
                        className={
                            "absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 transform rounded-full bg-gray-200 object-cover"
                        }
                    />
                </label>
            </div>
        </section>
    )
}
