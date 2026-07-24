"use client";

import Image from "next/image";
import Link from "next/link";
import { useCar } from "@/context/CarContext";

export default function CarPage() {
    const {
        carItems,
        removeFromCar,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice,
    } = useCar();

    if (carItems.length === 0) {
        return (
        <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <p className="text-2xl mb-2">🛒</p>
        <h1 className="text-lg font-semibold mb-2 text-pink-300">Tu carrito está vacío</h1>
        <p className="text-sm text-gray-500 mb-4">¡Agrega algunos postres deliciosos!</p>
        <Link
        href="/"
        className="bg-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-pink-700 transition-colors"
        >
        Ver catálogo
        </Link>
    </main>
    );   
    }

    return (
    <main className="max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Tu Carrito 🛒</h1>

        <div className="flex flex-col gap-3">
            {carItems.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 border rounded-lg p-3 bg-white shadow-sm"
                >
                    <div className="flex items-center gap-3">
                        <div className="relative w-16 h-16 shrink-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>

                        <div className="flex-1 min-w-0 sm:hidden">
                            <h3 className="font-semibold text-sm truncate text-gray-500">{item.title}</h3>
                            <span className="text-sm text-pink-600 font-bold">${item.price.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="hidden sm:block flex-1 min-w-0">
                        <h3 className="font-semibold text-sm truncate text-gray-500">{item.title}</h3>
                        <span className="text-sm text-pink-600 font-bold">${item.price.toFixed(2)}</span>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="w-7 h-7 flex items-center justify-center rounded-full text-sm hover:bg-gray-100 text-gray-500 border"
                            >
                                -
                            </button>
                            <span className="text-sm w-5 text-center text-gray-500">{item.carQuantity}</span>
                            <button
                                onClick={() => increaseQuantity(item.id)}
                                className="w-7 h-7 flex items-center justify-center rounded-full text-sm hover:bg-gray-100 text-gray-500 border"
                            >
                                +
                            </button>
                        </div>

                        <button
                            onClick={() => removeFromCar(item.id)}
                            className="text-red-500 text-xs font-semibold hover:underline"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-6 border-t pt-4 flex flex-col items-end gap-3">
            <p className="text-lg font-bold">
                Total: <span className="text-pink-600">${totalPrice.toFixed(2)}</span>
            </p>
            <button className="bg-pink-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
                Finalizar Compra
            </button>
        </div>
    </main>
);
}
