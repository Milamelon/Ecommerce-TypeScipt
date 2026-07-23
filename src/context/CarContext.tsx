"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {Product} from "@/types/product.types";
import { CarItem } from "@/types/car.types";

interface CarContextType {
    carItems: CarItem[];
    addToCar: (product: Product) => void;
    removeFromCar: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    totalItems: number;
    totalPrice: number;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export function CarProvider({children}: {children: ReactNode}) {
    const [carItems, setCarItems] = useState<CarItem[]>([]); 

    useEffect(() => {
        const stored = localStorage.getItem("carItems");
        if (stored) {
            setCarItems(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("carItems", JSON.stringify(carItems));
    }, [carItems]);

    function addToCar(product: Product) {
    setCarItems((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
            return prev.map((item) =>
                item.id === product.id
                    ? {...item, carQuantity: item.carQuantity + 1}
                    : item
            );
        }
        return [...prev, {...product, carQuantity: 1}];
    });
}

    function removeFromCar(id: number) {
        setCarItems((prev) => prev.filter((item) => item.id !== id));
    }

    function increaseQuantity(id: number) {
        setCarItems((prev) =>
            prev.map((item) =>
                item.id === id ? {...item, carQuantity: item.carQuantity + 1} 
                : item
            )
        );
    }

    function decreaseQuantity(id: number) {
        setCarItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, carQuantity: item.carQuantity - 1 } : item
            )
            .filter((item) => item.carQuantity > 0)
        );
    }
}

