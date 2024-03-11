import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/NavBar";
import MenShoes from "./Components/MenShoes";
import WomenShoesPage from "./Components/WomenShoes";
import KidsShoes from "./Components/KidsShoes";
import Bill from "./Components/Bill";
import Home from "./Components/Home";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import ForgotPassword from "./Forms/ForgotPassword";
import ResetPassword from "./Forms/ResetPassword";

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (userToken) => {
    setToken(userToken);
  };

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              token ? (
                <Navigate to="/menShoes" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/menShoes" element={<MenShoes token={token} />} />
          <Route
            path="/womenShoes"
            element={<WomenShoesPage token={token} />}
          />
          <Route path="/kidsShoes" element={<KidsShoes token={token} />} />
          <Route path="/bill" element={<Bill />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
