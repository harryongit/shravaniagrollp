import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type UserStatus = "pending" | "verified" | "rejected";

export type RegisteredUser = {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: "farmer" | "dealer";
  status: UserStatus;
  createdAt: string;
  farmName?: string;
  city?: string;
  state?: string;
};

type UserStoreContextType = {
  users: RegisteredUser[];
  pendingUsers: RegisteredUser[];
  verifiedUsers: RegisteredUser[];
  currentUser: RegisteredUser | null;
  registerUser: (data: Omit<RegisteredUser, "id" | "status" | "createdAt"> & { password: string }) => {
    success: boolean;
    error?: string;
    user?: RegisteredUser;
  };
  approveUser: (id: string) => void;
  rejectUser: (id: string) => void;
  canSignIn: (email: string) => { allowed: boolean; reason?: string };
  signInUser: (email: string, password: string) => { success: boolean; error?: string; user?: RegisteredUser };
  signOutUser: () => void;
  setCurrentUser: (user: RegisteredUser) => void;
};

const STORAGE_KEY = "shravani_users";

const UserStoreContext = createContext<UserStoreContextType>({
  users: [],
  pendingUsers: [],
  verifiedUsers: [],
  currentUser: null,
  registerUser: () => ({ success: false }),
  approveUser: () => {},
  rejectUser: () => {},
  canSignIn: () => ({ allowed: false }),
  signInUser: () => ({ success: false }),
  signOutUser: () => {},
  setCurrentUser: () => {},
});

function loadUsers(): RegisteredUser[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function seedDemoUsers(): RegisteredUser[] {
  const existing = loadUsers();
  if (existing.length > 0) return existing;

  const demo: RegisteredUser[] = [
    {
      id: "usr_1",
      email: "ramesh@farm.com",
      name: "Ramesh Kumar",
      phone: "+91 98765 43210",
      role: "farmer",
      status: "verified",
      createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
      farmName: "Green Fields Farm",
      city: "Pune",
      state: "Maharashtra",
    },
    {
      id: "usr_2",
      email: "suresh@agri.in",
      name: "Suresh Patel",
      phone: "+91 97654 32109",
      role: "dealer",
      status: "verified",
      createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
      farmName: "Patel Agri Solutions",
      city: "Nagpur",
      state: "Maharashtra",
    },
    {
      id: "usr_3",
      email: "anita@organic.in",
      name: "Anita Sharma",
      phone: "+91 96543 21098",
      role: "farmer",
      status: "pending",
      createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
      farmName: "Anita Organic Farm",
      city: "Jaipur",
      state: "Rajasthan",
    },
    {
      id: "usr_4",
      email: "vikram@kisan.in",
      name: "Vikram Singh",
      phone: "+91 95432 10987",
      role: "dealer",
      status: "pending",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      farmName: "Kisan Bazaar",
      city: "Lucknow",
      state: "Uttar Pradesh",
    },
  ];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(demo));
  return demo;
}

export function UserStoreProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<RegisteredUser[]>([]);
  const [currentUser, setCurrentUser] = useState<RegisteredUser | null>(null);

  useEffect(() => {
    setUsers(seedDemoUsers());
    const stored = localStorage.getItem("shravani_current_user");
    if (stored) {
      try {
        setCurrentUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("shravani_current_user");
      }
    }
  }, []);

  const persist = useCallback((updated: RegisteredUser[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setUsers(updated);
  }, []);

  const registerUser = useCallback(
    (data: Omit<RegisteredUser, "id" | "status" | "createdAt"> & { password: string }) => {
      const existing = loadUsers();
      if (existing.some((u) => u.email === data.email)) {
        return { success: false, error: "An account with this email already exists." };
      }

      const { password, ...userData } = data;
      const newUser: RegisteredUser = {
        ...userData,
        id: `usr_${Date.now()}`,
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      const passwords = JSON.parse(localStorage.getItem("shravani_passwords") || "{}");
      passwords[newUser.id] = password;
      localStorage.setItem("shravani_passwords", JSON.stringify(passwords));

      persist([...existing, newUser]);
      return { success: true, user: newUser };
    },
    [persist],
  );

  const approveUser = useCallback(
    (id: string) => {
      const updated = loadUsers().map((u) => (u.id === id ? { ...u, status: "verified" as const } : u));
      persist(updated);
    },
    [persist],
  );

  const rejectUser = useCallback(
    (id: string) => {
      const updated = loadUsers().map((u) => (u.id === id ? { ...u, status: "rejected" as const } : u));
      persist(updated);
    },
    [persist],
  );

  const canSignIn = useCallback((email: string) => {
    const all = loadUsers();
    const user = all.find((u) => u.email === email);
    if (!user) return { allowed: true };
    if (user.status === "pending") return { allowed: false, reason: "Your account is pending admin verification. Please wait for approval." };
    if (user.status === "rejected") return { allowed: false, reason: "Your registration was rejected by the admin." };
    return { allowed: true };
  }, []);

  const signInUser = useCallback((email: string, password: string) => {
    const all = loadUsers();
    const user = all.find((u) => u.email === email);
    if (!user) {
      return { success: false, error: "Invalid email or password" };
    }
    const passwords = JSON.parse(localStorage.getItem("shravani_passwords") || "{}");
    if (passwords[user.id] !== password) {
      return { success: false, error: "Invalid email or password" };
    }
    if (user.status === "pending") {
      return { success: false, error: "Your account is pending admin verification. Please wait for approval." };
    }
    if (user.status === "rejected") {
      return { success: false, error: "Your registration was rejected by the admin." };
    }
    localStorage.setItem("shravani_current_user", JSON.stringify(user));
    setCurrentUser(user);
    return { success: true, user };
  }, []);

  const signOutUser = useCallback(() => {
    localStorage.removeItem("shravani_current_user");
    setCurrentUser(null);
  }, []);

  const setCurrentUserFn = useCallback((user: RegisteredUser) => {
    localStorage.setItem("shravani_current_user", JSON.stringify(user));
    setCurrentUser(user);
  }, []);

  const pendingUsers = users.filter((u) => u.status === "pending");
  const verifiedUsers = users.filter((u) => u.status === "verified");

  return (
    <UserStoreContext.Provider
      value={{ users, pendingUsers, verifiedUsers, currentUser, registerUser, approveUser, rejectUser, canSignIn, signInUser, signOutUser, setCurrentUser: setCurrentUserFn }}
    >
      {children}
    </UserStoreContext.Provider>
  );
}

export const useUserStore = () => useContext(UserStoreContext);
