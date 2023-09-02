import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Contact } from "../Contact/Contact";
import "./pages.css";
import { Forms } from "../components/Forms/Forms";
import { useContext } from "react";
import { PopUp } from "../Context/Context";
import { AddOrder } from "../WebSite/AddOrder/AddOrder";
import { Welcome } from "../WebSite/Welcome/Welcome";
import { WebSite } from "../WebSite/WebSite";
export const Pages = () => {
  const contextPop = useContext(PopUp);
  const ContextPop = contextPop.popUP;
  return (
    <div >
      <Forms />
      <span
        className={`${
          ContextPop ? "blur-[10px] absolute w-full opacity-[1] visible" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/website" element={<WebSite />}>
            <Route path="welcome" element={<Welcome />} />
            <Route index element={<Welcome />} />
            <Route path="add-order" element={<AddOrder />} />
          </Route>
        </Routes>
      </span>
    </div>
  );
};
