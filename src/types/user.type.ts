export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
}

// Lo que se guarda en sesión 
export interface AuthUser {
  id: number;
  fullName: string;
  email: string;
}