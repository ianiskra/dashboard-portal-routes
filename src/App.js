import { Route, Routes } from "react-router-dom";
// UnAuthenticated
import Login from "./UnAuthenticated/Login/Login";
import Register from "./UnAuthenticated/Register/Register";
import Forgot from "./UnAuthenticated/Forgot/Forgot";

// Protected
import Dashboard from "./Authenticated/Dashboard/Dashboard";

// To provide its Context to all child components
import { AuthContext } from "./Context/AuthProvider";


function App() {


  return (
    <>
      {/* Pass in a value through Provider from Higher Order */}
      <AuthContext.Provider>
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
