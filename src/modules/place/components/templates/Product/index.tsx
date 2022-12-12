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
                "w-full break-inside-avoid rounded-xl flex flex-col text-white",
                themes[theme]
            )}>
            {product.cover && (
                <img
                    alt={product.name}
                    src={product.cover}
                    className={
                        "w-full max-h-96 bg-white rounded-t-xl object-cover"
                    }
                />
            )}
            <div className={"p-5 flex flex-col gap-4"}>
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
