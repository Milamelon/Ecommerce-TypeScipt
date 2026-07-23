"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      toast.success("¡Bienvenido de nuevo!");
      router.push("/");
    } else {
      toast.error("Correo o contraseña incorrectos");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 bg-pink-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        <h1 className="text-xl font-bold text-center text-pink-700">Iniciar Sesión</h1>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
            placeholder="••••••"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-600 text-white rounded-md py-2 text-sm font-semibold hover:bg-pink-700 transition-colors"
        >
          Entrar
        </button>

        <p className="text-xs text-center text-gray-500">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="text-pink-600 font-semibold">
            Regístrate
          </a>
        </p>
      </form>
    </main>
  );
}