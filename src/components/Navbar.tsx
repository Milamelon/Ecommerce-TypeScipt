"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {useCar} from "@/context/CarContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const { totalItems } = useCar();

  function handleLogout() {
    logout();
    toast.success("Sesión cerrada");
    router.push("/");
  }

  

  return (
    <nav className="bg-pink-600 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          🍰 Postres App
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/car" className="text-sm font-semibold hover:underline relative">
            🛒 Carrito
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-white text-pink-600 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <span className="text-sm hidden sm:inline">Hola, {user.fullName}</span>
              <button
                onClick={handleLogout}
                className="bg-white text-pink-600 text-sm font-semibold px-3 py-1 rounded-full hover:bg-pink-100 transition-colors"
              >
                Salir
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-semibold hover:underline"
              >
                Entrar
              </Link>
              <Link
                href="/register"
                className="bg-white text-pink-600 text-sm font-semibold px-3 py-1 rounded-full hover:bg-pink-100 transition-colors"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}