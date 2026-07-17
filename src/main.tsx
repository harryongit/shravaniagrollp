import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { AuthProvider } from "./lib/auth";
import { AdminAuthProvider } from "./lib/admin-auth";
import { UserStoreProvider } from "./lib/user-store";
import "./styles.css";

const router = getRouter();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AdminAuthProvider>
        <UserStoreProvider>
          <RouterProvider router={router} />
        </UserStoreProvider>
      </AdminAuthProvider>
    </AuthProvider>
  </React.StrictMode>,
);
