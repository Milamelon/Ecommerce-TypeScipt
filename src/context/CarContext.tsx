"use client";

import { createContext, useContext, useState, ReactNode } from "react";
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