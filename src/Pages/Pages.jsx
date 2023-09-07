import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Contact } from "./Contact/Contact";
import "./pages.css";
import { Forms } from "../components/Forms/Forms";
import { useContext } from "react";
import { PopUp } from "../Context/Context";
import { AddOrder } from "../WebSite/AddOrder/AddOrder";
import { Welcome } from "../WebSite/Welcome/Welcome";
import { MyOrder } from "../WebSite/MyOrder/MyOrder";
import { Service } from "../WebSite/Service/Service";
import { Wallet } from "../WebSite/Wallet/Wallet";
import { AddSite } from "../WebSite/AddSite/AddSite";
import { MySite } from "../WebSite/MySite/MySite";
import { DailyBonus } from "../WebSite/DailyBonus/DailyBonus";
import { ByPoints } from "../WebSite/ByPoints/ByPoints";
import { FBPage } from "../WebSite/FBPage/FBPage";
import { FBShare } from "../WebSite/FBShare/FBShare";
import { WebSite } from "../WebSite/Website";
import { ProfileFollow } from "../WebSite/ProfileFollow/ProfileFollow";
import { FBComment } from "../WebSite/FBComment/FBComment";
import { Trade } from "../WebSite/Trade/Trade";
import { PostLike } from "../WebSite/PostLike/PostLike";
export const Pages = () => {
  const contextPop = useContext(PopUp);
  const ContextPop = contextPop.popUP;
  return (
    <div>
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
            <Route path="my-order" element={<MyOrder />} />
            <Route path="service" element={<Service />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="add-site" element={<AddSite />} />
            <Route path="my-site" element={<MySite />} />
            <Route path="p2p-trade" element={<Trade />} />
            <Route path="daily-bonus" element={<DailyBonus />} />
            <Route path="buy-point" element={<ByPoints />} />
            <Route path="page-like" element={<FBPage />} />
            <Route path="fb-share" element={<FBShare />} />
            <Route path="fb-post" element={<PostLike />} />
            <Route path="fb-profile" element={<ProfileFollow />} />
            <Route path="fb-comment" element={<FBComment />} />
          </Route>
        </Routes>
      </span>
    </div>
  );
};
