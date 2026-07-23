"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { AuthUser } from "@/types/user.types";
import { usersSeed } from "@/data/users.data";

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
  register: (fullName: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(email: string, password: string): boolean {
    const found = usersSeed.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) return false;

    const authUser: AuthUser = {
      id: found.id,
      fullName: found.fullName,
      email: found.email,
    };

    setUser(authUser);
    localStorage.setItem("authUser", JSON.stringify(authUser));
    return true;
}

function register(fullName: string, email: string, password: string): boolean {
    const alreadyExists = usersSeed.some((u) => u.email === email);
    if (alreadyExists) return false;

    const newUser = {
      id: usersSeed.length + 1,
      fullName,
      email,
      password,
    };

    usersSeed.push(newUser);
    return login(email, password);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("authUser");
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;

}
