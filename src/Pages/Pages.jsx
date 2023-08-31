import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Contact } from "../Contact/Contact";
import "./pages.css";
import { Forms } from "../components/Forms/Forms";
import { useContext } from "react";
import { PopUp } from "../Context/Context";
export const Pages = () => {
  const contextPop = useContext(PopUp);
  const ContextPop = contextPop.popUP;
  return (
    <div className="overflow-hidden ">
      <Forms />
      <span
        className={`${
          ContextPop ? "blur-[10px] absolute w-full opacity-[1] visible" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </span>
    </div>
  );
};
