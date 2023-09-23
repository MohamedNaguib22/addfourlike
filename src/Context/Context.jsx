/* eslint-disable no-undef */
import { createContext, useState } from "react";

export const PopUp = createContext();
// eslint-disable-next-line react/prop-types
export const ContextPopUp = ({ children }) => {
  const [popUP, setPopUp] = useState(false);
  const [formDeposit, setFormDeposit] = useState(false);
  const [formWithdraw, setFormWithdraw] = useState(false);
  function ModelUp() {
    setPopUp(!popUP);
  }
  function FormDeposit() {
    setFormDeposit(!formDeposit);
  }
  function FormWithdraw() {
    setFormWithdraw(!formWithdraw);
  }
  return (
    <PopUp.Provider
      value={{
        popUP,
        setPopUp,
        ModelUp,
        FormDeposit,
        formDeposit,
        formWithdraw,
        FormWithdraw,
      }}
    >
      {children}
    </PopUp.Provider>
  );
};
