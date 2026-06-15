import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  username: string;
  email: string;
  fullName: string;
  plan: "FREE" | "PRO" | "ENTERPRISE";
  role: "USER" | "ADMIN";
  profile?: {
    avatarUrl?: string;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password?: string) => Promise<boolean>;
  register: (username: string, email: string, password?: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user session from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("makc_mock_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem("makc_mock_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string) => {
    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const mockUser: User = {
      username: email.split("@")[0] || "guest",
      email: email,
      fullName: email.split("@")[0].toUpperCase() || "MAKc Member",
      plan: "PRO", // Mocked as PRO to show the premium badges
      role: email.toLowerCase().includes("admin") ? "ADMIN" : "USER",
      profile: {
        avatarUrl: undefined,
      },
    };

    setUser(mockUser);
    localStorage.setItem("makc_mock_user", JSON.stringify(mockUser));
    setLoading(false);
    return true;
  };

  const register = async (username: string, email: string) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockUser: User = {
      username: username,
      email: email,
      fullName: username.charAt(0).toUpperCase() + username.slice(1),
      plan: "FREE",
      role: "USER",
    };

    setUser(mockUser);
    localStorage.setItem("makc_mock_user", JSON.stringify(mockUser));
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("makc_mock_user");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
