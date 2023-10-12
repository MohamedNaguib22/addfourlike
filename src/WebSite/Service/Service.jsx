import { FaFacebookF } from "react-icons/fa";
import { ServiceTable } from "../../components/ServiceTable/ServiceTable";
import { TableService } from "../../components/TableService";

export const Service = () => {
  return (
    <div>
      <div className="container my-[26px] lg:px-[40px]">
        <div className="flex flex-col mb-[-26px]">
          <div className="flex gap-2 items-center rounded-md mb-[-7px] bg-[#E1F4FA] px-[12px] py-[8px] font-medium">
            <FaFacebookF size={20} />
            <p className="text-[18px]">Facebook Real</p>
          </div>
          <div>
            <ServiceTable />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center rounded-md mb-[-7px] bg-[#E1F4FA] px-[12px] py-[8px] font-medium">
            <FaFacebookF size={20} />
            <p className="text-[18px]">Facebook Fake</p>
          </div>
          <div>
            <TableService />
          </div>
        </div>
      </div>
    </div>
  );
};
