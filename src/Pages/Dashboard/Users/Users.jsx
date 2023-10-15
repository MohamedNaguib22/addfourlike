import { FourCard } from "../../../components/Dashboard/FourCard/FourCard";
import { DateMonth } from "../../../components/Dashboard/Date/DateMonth";
import { BsArrowDownUp } from "react-icons/bs";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
export const Users = () => {
  const [users, setUsers] = useState([]);
  const [userRate, setUserRate] = useState("");
  const Cookie = new Cookies();
  const token = Cookie.get("addLike");
  console.log(userRate);
  const getUser = async () => {
    try {
      await axios
        .get("https://add-likes.onrender.com/add4like/api/v1/auth/users", {
          headers: { Authorization: "add__" + token },
        })
        .then((res) => {
          setUsers(res.data.users);
          console.log(res.data.users);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  async function handelSelect(id) {
    console.log(id);
    try {
      let res = await axios.put(
        `https://add-likes.onrender.com/add4like/api/v1/auth/user/rate/${id}`,
        { user_rate: userRate },
        { headers: { Authorization: "add__" + token } }
      );
      getUser();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  const showUsers = users.map((item, index) => {
    return (
      
        <tr className="bg-white border-b "  >
          <th
            scope="row"
            className="px-6 py-4 text-center font-medium text-gray-400  whitespace-nowrap "
          >
            {index + 1}
          </th>
          <td className="px-6 text-center py-4">{item.user_name}</td>
          <td className="px-6 text-center py-4">{item.email}</td>

          {item.user_rate && (
            <td className="px-6 text-center py-4">
              <select
                onChange={(e) => setUserRate(e.target.value)}
                className={`${
                  item.user_rate === "gold"
                    ? "text-orange-400"
                    : item.user_rate === "diamond" && "text-blue-400"
                }`}
              >
                <option disabled selected>
                  {item.user_rate}
                </option>
                <option value="gold">gold</option>
                <option value="normal">normal</option>
                <option value="diamond">diamond</option>
              </select>
            </td>
          )}

          <td className="px-6 text-center py-4">
            {item.createdAt.split("T").slice(0, 1).join(" ")}
          </td>
          <td className="py-6 text-center px-6">
            <button
              onClick={() => handelSelect(item._id)}
              className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg"
              to="/#"
            >
              Action
              <FaAngleDown size={18} className="inline ml-[12px]" />
            </button>
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <div className="px-[38px] pt-[16px] ">
      <h1 className="Text-Header mb-[8px]">
        <span className="text-blue-400">Dashboard</span> &gt; Users
      </h1>
      <DateMonth className="top-[17%] left-[22%]" />
      <FourCard />
      <div className="w-full bg-white rounded-2xl pb-[18px] pt-[6px] px-[10px]">
        <div className="relative mt-[8px] overflow-x-auto sm:rounded-lg">
          <div className="text-[18px] font-medium w-full flex items-center text-black uppercase bg-white  border-b-[2px] border-b-solid border-b-black">
            <div className="flex-1 flex gap-[46px]">
              <div className="px-6  py-3 text-blue-500 ml-[35px]">
                <button className="flex justify-center items-center mx-auto">
                  <span>All</span>
                  <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[6px]">
                    3
                  </span>
                </button>
              </div>
              <div className="px-6 text-center py-3">
                <button className="flex justify-center items-center mx-auto">
                  <span>Ban</span>
                  <span className="text-[12px] font-medium bg-gray-100 px-[10px] w-auto h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                    1
                  </span>
                </button>
              </div>
              <div className="px-6 text-center py-3">
                <button className="flex justify-center items-center mx-auto">
                  <span>Active</span>
                  <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                    2
                  </span>
                </button>
              </div>
            </div>
            <form>
              <div className="border-gray-400 border-[2px] rounded-md py-[4px] bg-gray-200 flex gap-[12px] items-center pl-[10px]">
                <FaSearch />
                <input
                  type="text"
                  className=" outline-none bg-gray-200 text-black text-[18px] "
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <table className="w-full text-sm text-left text-black overflow-auto">
            <thead className="Text-Paragraph text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 text-center py-3 ">
                  id{" "}
                  <BsArrowDownUp
                    size={18}
                    className="inline ml-[12px] text-gray-500"
                  />
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  User Name
                  <BsArrowDownUp
                    size={18}
                    className="inline ml-[12px] text-gray-500"
                  />
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  Email
                  <BsArrowDownUp
                    size={18}
                    className="inline ml-[12px] text-gray-500"
                  />
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  Status
                  <BsArrowDownUp
                    size={18}
                    className="inline ml-[12px] text-gray-500"
                  />
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  Data
                  <BsArrowDownUp
                    size={18}
                    className="inline ml-[12px] text-gray-500"
                  />
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  Action
                  <BsArrowDownUp
                    size={18}
                    className="inline ml-[12px] text-gray-500"
                  />
                </th>
              </tr>
            </thead>
            {users.length === 0 ? (
              <tr className="text-center text-[20px]">
                Loading Users...........
              </tr>
            ) : (
              showUsers
            )}
          </table>
        </div>
        <div className="flex items-center justify-end pt-[50px]">
          <div className="rounded-s-md hover:bg-blue-500 cursor-pointer transition-all  duration-[0.3s] bg-gray-200 text-[18px] h-[40px] font-medium w-[80px] flex items-center justify-center ">
            <p>Back</p>
          </div>
          <div>
            <div className="bg-blue-500 text-[20px] w-[50px] flex justify-center items-center h-[40px]  font-medium ">
              <p>1</p>
            </div>
          </div>
          <div className="rounded-e-md hover:bg-blue-500 cursor-pointer transition-all duration-[0.3s] bg-gray-200 text-[18px] h-[40px] font-medium w-[80px] flex items-center justify-center ">
            <p>Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};
