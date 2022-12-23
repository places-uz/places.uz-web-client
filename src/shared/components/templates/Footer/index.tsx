export const Footer = () => {
    return (
        <footer
            className={
                "flex h-32 w-full items-center justify-between border-t"
            }>
            <section>
                <div className={"flex gap-2 text-sm"}>
                    With ❤️ by
                    <div className={"flex gap-2"}>
                        <a
                            className={"text-orange-400"}
                            rel={"noopener noreferer"}
                            target={"_blank"}>
                            @nurullayevakbar
                        </a>
                        and
                        <a
                            className={"text-orange-400"}
                            rel={"noopener noreferer"}
                            target={"_blank"}>
                            @rakhimovkamran
                        </a>
                    </div>
                </div>
            </section>

            <span>
                2022 <a className={"text-orange-400"}>places.uz</a>
            </span>
        </footer>
    )
}
