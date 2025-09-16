import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./App.css"
import Home from "./pages/Home.jsx";
import Contato from "./pages/Contato.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element= {<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
