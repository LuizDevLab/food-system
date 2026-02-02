import { Prisma } from "@prisma/client";
import Image from "next/image";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
          avatarImageUrl: true;
        };
      };
    };
  }>;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="relative z-50 rounded-t-3xl py-5 mt-[-1.5rem]">
      <div>
        {/* RESTAURANTE */}
        <div className="flex items-center gap-1.5 px-5">
          <Image
            src={product.restaurant.avatarImageUrl}
            alt={product.restaurant.name}
            width={16}
            height={16}
            className="rounded-full"
          />
          <p className="text-xs text-muted-foreground ">
            {product.restaurant.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
