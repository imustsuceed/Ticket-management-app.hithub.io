import React from "react";
import { Navigate } from "react-router-dom";
import { getSession } from "../utils/auth";

/**
 * Protects routes — if no valid session -> redirect to /auth/login
 */
export default function ProtectedRoute({ children }){
  const session = getSession();
  if (!session) {
    // unauthorized
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}