import { Outlet } from "react-router-dom";
import { SideNavbar } from "../../components/Dashboard/SideNavbar";
import { TopNavbar } from "../../components/Dashboard/TopNavbar";
export const Dashboard = () => {
  return (
    <div>
      <TopNavbar />
      <div className="grid grid-cols-5">
        <div>
          <SideNavbar />
        </div>
        <div
          className="w-full bg-gray-100 col-span-4 mt-[80px] min-h-screen"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
