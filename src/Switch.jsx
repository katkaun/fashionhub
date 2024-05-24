import { Routes, Route } from "react-router-dom";
import Login from "./comps/Login";
import Registration from "./comps/Registration";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Switch;
