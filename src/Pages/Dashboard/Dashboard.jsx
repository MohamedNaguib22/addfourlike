import { Outlet } from "react-router-dom"
import { SideNavbar } from "../../components/Dashboard/SideNavbar"
import { TopNavbar } from "../../components/Dashboard/TopNavbar"

export const Dashboard = () => {
  return (
    <div>
      <TopNavbar />
      <div className="flex">
        <SideNavbar />
        <div className=" w-full">
          <div className="bg-gray-100 h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
