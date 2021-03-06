import { Route, Routes } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// UnAuthenticated
import Login from "./UnAuthenticated/Login/Login";
import Register from "./UnAuthenticated/Register/Register";
import Forgot from "./UnAuthenticated/Forgot/Forgot";

// Protected
import Dashboard from "./Authenticated/Dashboard/Dashboard";

// To provide its Context to all child components
import { AuthProvider } from "./Context/AuthProvider";
import { ProtectedRoute } from "./Authenticated/ProtectedRoute/ProtectedRoute";
import Inventory from "./Authenticated/Inventory/Inventory";

function App() {
  

  

  return (
    <>
      {/* Pass in a value through Provider from Higher Order */}
      <AuthProvider>
        <Routes>

          {/* Public Routes */}
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />

          {/* Protected Route */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
