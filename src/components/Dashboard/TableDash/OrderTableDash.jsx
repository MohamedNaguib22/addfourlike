import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Cookies from "universal-cookie";
export const OrderTableDash = () => {
  const Cookie = new Cookies();
  const token = Cookie.get("addLike");
  const [order, setOrder] = useState([]);
  const [clickTwo, setClickTwo] = useState("");
  console.log(status);
  const getOrder = async () => {
    try {
      axios
        .get("https://add-likes.onrender.com/add4like/api/v1/orders", {
          headers: { Authorization: "add__" + token },
        })
        .then((res) => {
          setOrder(res.data.orders);
          console.log(res.data.orders);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  function ClickTwo(click) {
    setClickTwo(click);
    if (clickTwo === click) {
      setClickTwo("");
    } else {
      setClickTwo(click);
    }
  }
  async function handelChange(id) {
    console.log(id);
    try {
      let res = await axios.post(
        `https://add-likes.onrender.com/add4like/api/v1/orders/complete/${id}`,
        null,
        { headers: { Authorization: "add__" + token } }
      );
      getOrder();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  async function handelDelete(id) {
    console.log(id);
    try {
      let res = await axios.delete(
        `https://add-likes.onrender.com/add4like/api/v1/orders/${id}`,
        { headers: { Authorization: "add__" + token } }
      );
      getOrder();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  async function handelCancel(id) {
    console.log(id);
    try {
      let res = await axios.post(
        `https://add-likes.onrender.com/add4like/api/v1/orders/cancel/${id}`,
        null,
        { headers: { Authorization: "add__" + token } }
      );
      getOrder();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="relative mt-[8px] overflow-x-auto sm:rounded-lg">
      <div className="text-[18px] font-medium w-full text-black uppercase bg-white  border-b-[2px] border-b-solid border-b-black">
        <div className="flex gap-[46px]">
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
              <span>Complete</span>
              <span className="text-[12px] font-medium bg-gray-100 px-[10px] w-auto h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                1
              </span>
            </button>
          </div>
          <div className="px-6 text-center py-3">
            <button className="flex justify-center items-center mx-auto">
              <span>Pending</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left text-black ">
        <thead className="Text-Paragraph text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 text-center py-3 ">
              id
            </th>
            <th scope="col" className="px-6 text-center py-3">
              User Name
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Type
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Link
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
          {order.map((item, index) => {
            return (
              <tr key={index} className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 text-center font-medium text-gray-400  whitespace-nowrap "
                >
                  {index + 1}
                </th>
                <td className="px-6 text-center py-4">Mohamed</td>
                <td className="px-6 text-center py-4">{item.type}</td>
                <td className="px-6 text-center py-4 ">{item.link}</td>
                <td className="px-6 text-center py-4">{item.quantity}</td>
                <td
                  className={`px-6 text-center py-4 ${
                    item.status === "pending"
                      ? "text-red-400"
                      : item.status === "completed" && "text-green-400"
                  }`}
                >
                  {item.status}
                </td>
                <td className="px-6 text-center py-4">
                  {item.createdAt.split("T").slice(0, 1).join(" ")}
                </td>
                <td className="py-6 text-center px-6">
                  <button
                    className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg relative"
                    to="/#"
                    onClick={() => ClickTwo(item._id)}
                  >
                    Action
                    <FaAngleDown size={18} className="inline ml-[12px]" />
                    {/* drop down */}
                    <ul
                      className={`absolute bg-gray-300 w-full z-[999] flex flex-col justify-start items-start px-[4px] py-[12px] gap-[12px] rounded-md top-[35px] ${
                        clickTwo === item._id ? "block" : "hidden"
                      }`}
                    >
                      <li onClick={() => handelDelete(item._id)}>Delete</li>
                      <li onClick={() => handelChange(item._id)}>Complete</li>
                      <li onClick={() => handelCancel(item._id)}>Cancel</li>
                    </ul>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
