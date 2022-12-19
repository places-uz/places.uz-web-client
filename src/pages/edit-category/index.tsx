import { Button, IconButton } from "shared/components/atoms"
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
const EditCategoryPage = () => {
    return (
        <main className={"w-full max-w-4xl px-5 mx-auto"}>
            <section className={"mt-12 flex justify-between items-center"}>
                <div className={"flex flex-col gap-1"}>
                    <h1 className={"text-3xl font-semibold"}>Category Name</h1>
                </div>

                <IconButton
                    shadow={"lg"}
                    size={"md"}
                    captionColor={"red"}
                    icon={<TrashIcon width={20} height={20} />}
                />
            </section>

            <section className={"mt-12"}>
                <div
                    className={
                        "flex items-center justify-between border-b pb-4 mb-6"
                    }>
                    <div className={"flex flex-col gap-1"}>
                        <h1 className={"text-2xl font-semibold"}>Products</h1>
                        <span className={"text-gray-500 text-sm"}>
                            12 Products
                        </span>
                    </div>

                    <Button
                        icon={<PlusIcon width={20} height={20} />}
                        type={"themed"}
                        size={"xs"}>
                        Add Product
                    </Button>
                </div>
            </section>
        </main>
    )
}

export default EditCategoryPage
