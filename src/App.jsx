import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Componentes/Home/Home";
import Login from "./Componentes/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./Componentes/User/User";
import ProtectedRoute from "./Componentes/Helper/ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
