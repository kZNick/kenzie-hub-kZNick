import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/pages/login/login";
import { NotFound } from "./components/pages/notFound";
import { Register } from "./components/pages/register/register";
import GlobalStyle from "./components/Styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./components/pages/home/home";
import { UserProvider } from "./components/Contexts/contexsUser";
import { RegisterLoginProvider } from "./components/Contexts/contexsLoginRegister";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route element={<RegisterLoginProvider/>}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<UserProvider />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
