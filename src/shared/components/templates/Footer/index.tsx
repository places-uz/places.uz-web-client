export const Footer = () => {
    return (
        <footer
            className={
                "w-full items-center flex justify-between h-32 border-t"
            }>
            <section>
                <div className={"text-sm flex gap-2"}>
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
