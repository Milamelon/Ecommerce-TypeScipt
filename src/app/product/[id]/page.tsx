"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/data/products.data";
import { useCar } from "@/context/CarContext";
import { toast } from "sonner";

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCar } = useCar();

    const productId = Number(params.id);
    const product = products.find((p) => p.id === productId);

    if (!product) {
    return (
        <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-lg font-semibold mb-4 text-black">Producto no encontrado</h1>
        <button
            onClick={() => router.push("/")}
            className="bg-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full"
        >
            Volver al catálogo
        </button>
        </main>
    );
}

    function handleAddToCart() {
        if (!product) return;
    addToCar(product);
    toast.success(`${product.title} agregado al carrito`);
    }

    return (
    <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden shrink-0">
            <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            />
        </div>

        <div className="flex flex-col gap-3 md:w-1/2">
            <span className="text-xs uppercase text-pink-500 font-semibold">
            {product.category}
            </span>
            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            <span className="text-3xl font-bold text-pink-600 mt-2">
            ${product.price.toFixed(2)}
            </span>

            <button
            onClick={handleAddToCart}
            className="mt-4 bg-pink-600 text-white font-semibold py-3 rounded-md hover:bg-pink-700 transition-colors"
            >
            Agregar al carrito
            </button>

            <button 
            onClick={() => router.push("/")} 
            className="mt-2 bg-gray-200 text-gray-700 font-semibold py-3 rounded-md hover:bg-gray-300 transition-colors">
            Volver al catálogo
            </button>
            </div>
        </div>
    </main>
    );
}