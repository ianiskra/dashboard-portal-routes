import { Route, Routes } from "react-router-dom";
import Login from "./UnAuthenticated/Login/Login";
import Register from "./UnAuthenticated/Register/Register";
import Forgot from "./UnAuthenticated/Forgot/Forgot";
import { ProtectedRoute } from "./Authenticated/ProtectedRoute/ProtectedRoute";
import Dashboard from "./Authenticated/Dashboard/Dashboard";
import Inventory from "./Authenticated/Inventory/Inventory";
import { AuthContext } from "./Context/AuthProvider"


function App() {

  return (
    <>
      <AuthContext.Provider>
        <Routes>
          {/* Public Routes */}
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>

        </Routes>
      </AuthContext.Provider>
    </>
  );
};

export default App;
