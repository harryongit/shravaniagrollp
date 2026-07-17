import React, { createContext, useContext, useState, useEffect } from "react";

type AdminUser = {
  username: string;
  role: "super_admin";
};

type AdminAuthContextType = {
  admin: AdminUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextType>({
  admin: null,
  isAuthenticated: false,
  loading: true,
  signIn: async () => ({ success: false }),
  signOut: () => {},
});

const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("shravani_admin");
    if (stored) {
      try {
        setAdmin(JSON.parse(stored));
      } catch {
        localStorage.removeItem("shravani_admin");
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (username: string, password: string) => {
    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
      return { success: false, error: "Invalid admin credentials" };
    }
    const adminUser: AdminUser = { username, role: "super_admin" };
    localStorage.setItem("shravani_admin", JSON.stringify(adminUser));
    setAdmin(adminUser);
    return { success: true };
  };

  const signOut = () => {
    localStorage.removeItem("shravani_admin");
    setAdmin(null);
  };

  return (
    <AdminAuthContext.Provider
      value={{ admin, isAuthenticated: !!admin, loading, signIn, signOut }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export const useAdminAuth = () => useContext(AdminAuthContext);
