import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { PageNotFound } from "./PageNotFound";
import { Singup } from "./Singup";
import { Products } from "./Products";
import { Profile } from "./Profile";
import { Checkout } from "./Checout";

//funcion componente de navegacion - ojo rutas entre paginas
export const Navigation = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/singup" element={<Singup />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/products/:idShop" element={<Products />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);
