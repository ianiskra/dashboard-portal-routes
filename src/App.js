import { Route, Routes } from "react-router-dom";
import { useState } from "react";
// UnAuthenticated
import Login from "./UnAuthenticated/Login/Login";
import Register from "./UnAuthenticated/Register/Register";
import Forgot from "./UnAuthenticated/Forgot/Forgot";

// Protected
import Dashboard from "./Authenticated/Dashboard/Dashboard";

// To provide its Context to all child components
import { AuthContext, AuthProvider } from "./Context/AuthProvider";


function App() {

  const [user, setUser] = useState(AuthProvider());

  console.log(user);
  return (
    <>
      {/* Pass in a value through Provider from Higher Order */}
      <AuthContext.Provider value={user}>
        <Routes>

          {/* Public Routes */}
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />

          {/* Protected Route */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
};

export default App;
