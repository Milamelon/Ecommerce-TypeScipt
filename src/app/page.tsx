"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products.data";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category));
    return ["Todos", ...Array.from(unique)];
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-black">Catálogo de Postres 🍰</h1>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm border transition-colors ${
              selectedCategory === cat
                ? "bg-pink-600 text-white border-pink-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}