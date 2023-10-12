import { Link } from "react-router-dom";

export const ServiceTable = () => {
  return (
    <div className="relative mt-[8px] container overflow-x-auto mb-[28px] sm:rounded-lg">
      <table className="w-full text-sm text-left text-black ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Service
            </th>
            <th scope="col" className="px-6 py-3">
              Rate per 1000
            </th>
            <th scope="col" className="px-6 py-3">
              Min order
            </th>
            <th scope="col" className="px-6 py-3">
              Max order
            </th>
            <th scope="col" className="px-6 py-3">
              Average time
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap "
            >
              1
            </th>
            <td className="px-6 py-4 min-w-[310px] max-w-[650px]">
              Facebook Real Like
            </td>
            <td className="px-6 py-4">$2.00</td>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">200000</td>
            <td className="px-6 py-4">33 hours 27 minutes</td>
            <td className="py-4 px-6">
              <Link
                className="bg-blue-400 text-white w-[200px] py-[8px] rounded-lg px-[20px] "
                to="/#"
              >
                View
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
