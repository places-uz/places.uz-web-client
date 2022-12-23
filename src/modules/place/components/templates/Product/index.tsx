import cn from "classnames"
import { Theme, themes } from "shared/constants/themes"
import type { Product as IProduct } from "shared/types"

interface ProductProps {
    theme: Theme
    product: IProduct
}

export const Product = ({ product, theme }: ProductProps) => {
    return (
        <article
            className={cn(
                "flex w-full break-inside-avoid flex-col rounded-xl text-white",
                themes[theme]
            )}>
            {product.cover && (
                <img
                    alt={product.name}
                    src={product.cover}
                    className={
                        "max-h-96 w-full rounded-t-xl bg-white object-cover"
                    }
                />
            )}
            <div className={"flex flex-col gap-4 p-5"}>
                <h2 className={"text-2xl font-semibold"}>{product.name}</h2>

                {product.description && (
                    <p className={"text-sm font-normal"}>
                        {product.description}
                    </p>
                )}

                <span className={"text-xl font-bold"}>{product.price}</span>
            </div>
        </article>
    )
}
