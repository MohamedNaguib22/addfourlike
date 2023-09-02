import { Outlet } from "react-router-dom";
import { LeftSide } from "../components/LeftSide/LeftSide";
import { RightSide } from "../components/RightSide/RightSide";
import { TopNav } from "../components/TopNav/TopNav";
import "./Website.css"
export const WebSite = () => {
  return (
    <div className=" h-fit bg-[#0000001c]">
      <TopNav />
      <div className="mt-[90px] grid grid-cols-1 lg:grid-cols-5 h-auto">
        <div className="col-span-1 relative">
          <LeftSide />
        </div>
        <div className="col-span-3">
          <Outlet />
        </div>
        <div className="col-span-1">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
