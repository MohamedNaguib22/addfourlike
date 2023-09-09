export const WalletTable = () => {
  return (
    <div className="relative mt-[8px] container overflow-x-auto mb-[28px] sm:rounded-lg">
      <table className="w-full text-sm text-left text-black ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Data & Time
            </th>
            <th scope="col" className="px-6 py-3">
              AMF Tokens
            </th>
            <th scope="col" className="px-6 py-3">
              AMF Balance
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
            <th scope="col" className="px-6 py-3">
              Point Balance
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Hash
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap "
            >
              1.
            </th>
            <td className="px-6 py-4">Aug 14, 2023 - GMT 20:3</td>
            <td className="px-6 py-4">1000</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">-</td>
            <td className="px-6 py-4">-</td>
            <td className="px-6 py-4">completed withdrawal</td>
            <td className="py-4 px-6">0x531ce78689...</td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap "
            >
              2.
            </th>
            <td className="px-6 py-4 min-w-[310px] max-w-[650px]">
              Aug 22, 2023 - GMT 18:3
            </td>
            <td className="px-6 py-4">500</td>
            <td className="px-6 py-4">1000</td>
            <td className="px-6 py-4">10000</td>
            <td className="px-6 py-4">445</td>
            <td className="px-6 py-4">p2p Trade</td>
            <td className="py-4 px-6">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
