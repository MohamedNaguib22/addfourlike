import Logo from "../../../public/Assets/img/1.webp";
export const Table = () => {
  return (
    <div className="w-[90%] mx-auto mb-[10px]">
      <table className="w-full bg-white rounded-lg">
        <thead>
          <tr>
            <th className="text-white font-normal bg-gray-400 gap-2">Type</th>
            <th className="text-white font-normal bg-gray-400 gap-2">Status</th>
            <th className="text-white font-normal bg-gray-400 gap-2">Time</th>
            <th className="text-white font-normal bg-gray-400 gap-2">Title</th>
            <th className="text-white font-normal bg-gray-400 gap-2">CPT</th>
            <th className="text-white font-normal bg-gray-400 gap-2">
              Progress
            </th>
            <th className="text-white font-normal bg-gray-400 gap-2">
              Total Cost
            </th>
            <th className="text-white font-normal bg-gray-400 gap-2">Views</th>
            <th className="text-white font-normal bg-gray-400 gap-2">ToTop</th>
            <th className="text-white font-normal bg-gray-400 gap-2">Action</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="flex items-center justify-center">
              <img className="w-[30px]" src={Logo} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
