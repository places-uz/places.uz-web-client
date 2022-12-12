import { Dispatch, SetStateAction } from "react"
import cn from "classnames"
import { Theme, themes } from "shared/constants/themes"

export interface Tab {
    value: string
    label: string
}

interface TabsProps {
    tabs: Tab[]
    activeTab: Tab
    setActiveTab: Dispatch<SetStateAction<Tab>>
    theme?: Theme

    size?: "sm" | "md"
}

export const Tabs = ({
    tabs,
    activeTab,
    setActiveTab,
    theme = "orange",
    size = "md"
}: TabsProps) => {
    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab)
    }

    return (
        <section className={"flex flex-wrap gap-2 rounded-full"}>
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => handleTabClick(tab)}
                    className={cn(
                        "rounded-full text-white py-2 px-5",
                        {
                            "text-xs": size === "sm",
                            "text-md": size === "md"
                        },

                        {
                            "text-white": tab.value === activeTab.value,
                            "text-gray-800 bg-none":
                                tab.value !== activeTab.value
                        },
                        themes[theme]
                    )}>
                    {tab.label}
                </button>
            ))}
        </section>
    )
}
