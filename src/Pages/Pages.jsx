import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Contact } from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";

export const Pages = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
