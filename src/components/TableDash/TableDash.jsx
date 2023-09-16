export const TableDash = () => {
  return (
    <div className="relative mt-[8px] overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-black ">
        <thead className="Text-Paragraph text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 text-center py-3 ">
              id
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Name
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Type
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Amount
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Status
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Data
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="Text-Paragraph">
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 text-center font-medium text-gray-400  whitespace-nowrap "
            >
              1
            </th>
            <td className="px-6 text-center py-4">Mohamed</td>
            <td className="px-6 text-center py-4">Deposit</td>
            <td className="px-6 text-center py-4">300$</td>
            <td className="px-6 text-center py-4 text-[#009721]">Complete</td>
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg"
                to="/#"
              >
                Action &gt;
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 text-center font-medium text-gray-400  whitespace-nowrap "
            >
              2
            </th>
            <td className="px-6 text-center py-4">Mahmoud</td>
            <td className="px-6 text-center py-4">Buy Point</td>
            <td className="px-6 text-center py-4">500$</td>
            <td className="px-6 text-center py-4 text-[#009721]">Complete</td>
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg"
                to="/#"
              >
                Action &gt;
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 text-center font-medium text-gray-400  whitespace-nowrap "
            >
              3
            </th>
            <td className="px-6 text-center py-4">Ahmed</td>
            <td className="px-6 text-center py-4">P2P</td>
            <td className="px-6 text-center py-4">50$</td>
            <td className="px-6 text-center py-4 text-[#009721]">Complete</td>
            <td className="px-6 text-center py-4">6 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg"
                to="/#"
              >
                Action &gt;
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 text-center font-medium text-gray-400  whitespace-nowrap "
            >
              4
            </th>
            <td className="px-6 text-center py-4">Kareem</td>
            <td className="px-6 text-center py-4">Withdraw</td>
            <td className="px-6 text-center py-4">47.5$</td>
            <td className="px-6 text-center py-4 text-red-500">Pending</td>
            <td className="px-6 text-center py-4">5 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg"
              >
                Action &gt;
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
