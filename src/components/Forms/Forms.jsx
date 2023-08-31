import { useContext } from "react";
import { PopUp } from "../../Context/Context";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { FormContext } from "../../Context/ContextForm";
import { ForgotPassword } from "./ForgotPassword";

export const Forms = () => {
  const contextPop = useContext(PopUp);
  const ContextPop = contextPop.popUP;
  const contextForm = useContext(FormContext);
  const stateContext = contextForm.switchBtn;
  return (
    <>
      <div
        className={`fixed h-full z-[999]  top-0 transition-all duration-[0.3s] ${
          ContextPop ? "w-full opacity-[1] visible " : "w-0 opacity-0 invisible"
        }`}
      >
        {stateContext === "signup" ? (
          <Signup />
        ) : stateContext === "login" ? (
          <Login />
        ) : (
          stateContext === "forgot" && (
            <ForgotPassword />
          )
        )}
      </div>
    </>
  );
};
