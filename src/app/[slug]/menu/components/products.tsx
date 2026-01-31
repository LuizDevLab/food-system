import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="space-y-3 px-1.5 py-3">
      {products.map((product) => (
        <Link
          key={product.id}
          href="/"
          className="flex items-center justify-between gap-10 py-3 border-b"
        >
          <div>
            <h4 className="text-sm font-medium">{product.name}</h4>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">{new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL"
            }).format(product.price)}</p>
          </div>

          <div className="relative min-h-[82px] min-w-[120px]">
            <Image src={product.imageUrl} alt={product.name} fill className="rounded-lg object-contain"/>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
