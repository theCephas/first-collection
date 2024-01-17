"use client";
import { createContext, useContext, useState } from "react";

interface User {
  username: string;
}

interface UserData {
  username: string;
  password: string;
}

interface AuthContextProps {
  user: User | null;
  signIn: (userData: UserData) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  const signIn = (userData: UserData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
