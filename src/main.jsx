import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Layout from "./Layout.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import ColorChanger from "./components/color_changer/ColorChanger.jsx";
import PasswordGenerator from "./components/password_generator/PasswordGenerator.jsx";
import CurrencyConverter from "./components/currency_converter/CurrencyConverter.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="/color-changer" element={<ColorChanger />} />
      <Route path="/password-generator" element={<PasswordGenerator />} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
