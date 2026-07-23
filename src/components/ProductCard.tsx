import Image from "next/image";
import { Product } from "@/types/product.types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex items-center gap-4 border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="relative w-20 h-20 shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="font-semibold text-sm sm:text-base truncate">{product.title}</h3>
        <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
        <span className="text-sm font-bold text-pink-600 mt-1">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}