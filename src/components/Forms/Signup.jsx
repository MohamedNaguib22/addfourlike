import { useContext, useState } from "react";
import { FaPlus, FaUser } from "react-icons/fa";
import { FormContext } from "../../Context/ContextForm";
import { PopUp } from "../../Context/Context";

export const Signup = () => {
  // UseContext
  const contextPop = useContext(PopUp);
  const functionModel = contextPop.ModelUp;
  const contextForm = useContext(FormContext);
  const switchContext = contextForm.Switch;
  // State API
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });
  // Function OnChange
  function handelChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Function API
  function Submit(e) {
    e.preventDefault();
  }
  return (
    <div className="lg:w-[40%] xl:w-[30%] w-full FormsLogin md:w-[65%] bg-[#00000057] px-[30px] py-[50px] rounded-md absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%]">
      <div>
        <FaPlus
          className="rotate-45 text-white fixed top-[8%] right-[10%] z-[558] cursor-pointer"
          size={36}
          onClick={functionModel}
        />
      </div>
      <form
        onSubmit={Submit}
        className="flex flex-col gap-[20px] lg:w-[90%] mx-auto"
      >
        <div className="flex justify-center text-black">
          <span>
            <FaUser size={80} />
          </span>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handelChange}
            id="floating_user"
            className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_user"
            className="peer-focus:font-medium absolute text-[18px] text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handelChange}
            id="floating_email"
            className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-[18px]  text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handelChange}
            id="floating_password"
            className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-[18px]  text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={handelChange}
            id="floating_password"
            className="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-[18px]  text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm Password
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white flex justify-center items-center bg-[#D9D7D7] border-1 border-[#707070]  font-[400] text-[20px] w-[60%] lg:w-[200px] h-[50px] rounded-[20px]"
          >
            Register
          </button>
        </div>
        <h2 className="text-white text-[20px] text-center font-medium">
          if You Have Account ?
          <span
            className=" font-bold cursor-pointer text-blue-700"
            onClick={() => switchContext("login")}
          >
            Login
          </span>
        </h2>
      </form>
    </div>
  );
};
