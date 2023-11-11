import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Componentes/Home/Home";
import Login from "./Componentes/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./Componentes/User/User";
import Photo from "./Componentes/Photo/Photo";
import ProtectedRoute from "./Componentes/Helper/ProtectedRoute";
import UserProfile from "./Componentes/User/UserProfile";
import NotFound from "./Componentes/NotFound/NotFound";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="appBody">
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
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
