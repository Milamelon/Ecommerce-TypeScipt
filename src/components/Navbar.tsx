"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

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
          <Link href="/cart" className="text-sm font-semibold hover:underline">
            🛒 Carrito
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