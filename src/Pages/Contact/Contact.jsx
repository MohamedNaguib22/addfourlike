import { FaEnvelope, FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { Footer } from "../../Home/Footer/Footer";
import Navbar from "../Navbar/Navbar";
export const Contact = () => {
  return (
    <>
      <Navbar
        class="bg-gray-200 "
        color="text-black"
        border="text-black  border-2 border-black"
      />
      <div className=" h-auto py-[100px] relative">
        <div className="container">
          <h1 className="text-black text-center font-bold text-[24px] mb-[20px]">
            Any Question or Suggestion? Just write us a message!
          </h1>
        </div>
        <div className="container grid lg:grid-cols-3 grid-col-1 gap-[20px]">
          <div className="bg-gray-600 mt-[20px] flex flex-col gap-[40px] lg:items-start lg:justify-start justify-center items-center h-fit pl-[10px] pr-[50x] py-[60px] text-white rounded-lg">
            <div>
              <h1 className="text-[34px] font-bold">Contact information</h1>
              <p className="text-[20px] font-medium">
                Say something to start a live chat!
              </p>
            </div>
            <div className="flex items-center gap-3 text-[18px]">
              <span>
                <BsWhatsapp size={24} />
              </span>
              +20 109 508 3774
            </div>
            <div className="flex items-center gap-3 text-[18px]">
              <span>
                <FaEnvelope size={24} />
              </span>
              kreemkhaled112@gmail.com
            </div>
            <div className="flex gap-[16px]">
              <span>
                <FaTelegram className="cursor-pointer" size={28} />
              </span>
              <span>
                <BsFacebook className="cursor-pointer" size={28} />
              </span>
              <span>
                <AiFillYoutube className="cursor-pointer" size={28} />
              </span>
              <span>
                <FaPhoneAlt className="cursor-pointer" size={24} />
              </span>
            </div>
          </div>
          <div className="lg:col-span-2 px-5">
            <form className="flex flex-col gap-[20px]">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_user"
                  id="floating_user"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_user"
                  className="peer-focus:font-medium absolute text-[18px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-[18px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div>
                <h1 className="text-black text-[26px] font-medium mb-[20px]">
                  Select Subject ?
                </h1>
                <div className="flex">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      defaultValue
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 "
                    />
                    <label
                      htmlFor="inline-radio"
                      className="ml-2 text-[22px] font-medium text-black"
                    >
                      Problem
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      defaultValue
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="inline-2-radio"
                      className="ml-2 text-[22px] font-medium text-black"
                    >
                      Suggestion
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      defaultChecked
                      id="inline-checked-radio"
                      type="radio"
                      defaultValue
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full"
                    />
                    <label
                      htmlFor="inline-checked-radio"
                      className="ml-2 text-[22px] font-medium text-black"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_message"
                  id="floating_message"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_message"
                  className="peer-focus:font-medium absolute text-[18px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Write your message
                </label>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-gray-600 hover:bg-gray-800 font-medium transition-all duration-[0.3s] text-[18px] w-[80%] lg:w-[180px] h-[50px] rounded-full "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
