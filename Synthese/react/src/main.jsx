import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Main from './App/MainApp'
import { AuthProvider } from "./App/middleWare/authContext";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './index.css'

createRoot(document.getElementById("root")).render(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
);
