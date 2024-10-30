import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  function authStatus(): boolean {
    const storedAuth = localStorage.getItem("authenticated");
    return storedAuth ? (JSON.parse(storedAuth) as boolean) : false;
  }

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(authStatus);

  useEffect(() => {
    localStorage.setItem("authenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
