import { Outlet } from "react-router-dom";
import { LeftSide } from "../components/LeftSide/LeftSide";
import { RightSide } from "../components/RightSide/RightSide";
import { TopNav } from "../components/TopNav/TopNav";
import "./Website.css"
export const WebSite = () => {
  return (
    <div className="bg-[#0000001c] min-h-screen">
      <TopNav />
      <div className="mt-[90px] grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-1">
          <LeftSide />
        </div>
        <div className="col-span-4 h-auto lg:h-fit mb-[26px]">
          <Outlet />
        </div>
        <div className="col-span-1">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
