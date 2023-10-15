/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi";
import Cookies from "universal-cookie";

export const FourCard = (props) => {
  const [users, setUsers] = useState([]);
  const Cookie = new Cookies();
  const token = Cookie.get("addLike");
  useEffect(() => {
    try {
      axios
        .get("https://add-likes.onrender.com/add4like/api/v1/auth/users", {
          headers: { Authorization: "add__" + token },
        })
        .then((res) => setUsers(res.data.users));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[40px] mb-[26px]">
      <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
        <div className="flex flex-col gap-1 flex-1">
          <p className="Text-Paragraph text-gray-500">Total Users</p>
          <p className="text-[18px] lg:text-[24px] font-bold">{users.length}</p>
        </div>
        <div className="bg-blue-300 w-[60px] h-[60px] flex justify-center items-center rounded-full">
          <HiUsers size={35} />
        </div>
      </div>
      <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
        <div className="flex flex-col gap-1 flex-1">
          <p className="Text-Paragraph text-gray-500">Active Users</p>
          <p className="text-[18px] lg:text-[24px] font-bold">{users.length}</p>
        </div>
        <div className="bg-green-400 w-[60px] h-[60px] flex justify-center items-center rounded-full">
          <HiUsers size={35} />
        </div>
      </div>
      {props.Three && (
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">Total Exchange</p>
            <p className="text-[18px] lg:text-[24px] font-bold">2K</p>
          </div>
          <div className="bg-blue-300 w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <HiUsers size={35} />
          </div>
        </div>
      )}
      {props.Four && (
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">Active Exchange</p>
            <p className="text-[18px] lg:text-[24px] font-bold">1K</p>
          </div>
          <div className="bg-blue-300 w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <HiUsers size={35} />
          </div>
        </div>
      )}
    </div>
  );
};
