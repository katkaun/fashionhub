import { Routes, Route } from "react-router-dom";
import Login from "./comps/Login";
import Registration from "./comps/Registration";
import Home from "./pages/Home";


const Switch = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
    );
}

export default Switch;