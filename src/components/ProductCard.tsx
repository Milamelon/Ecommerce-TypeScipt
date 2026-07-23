// src/components/ProductCard.tsx
import Image from "next/image";
import { Product } from "@/types/product.types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white h-full">
      <div className="relative w-full aspect-square">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 p-3 gap-1">
        <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
        <p className="text-xs text-gray-500 line-clamp-2 flex-1">{product.description}</p>
        <span className="text-sm font-bold text-pink-600 mt-1">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}