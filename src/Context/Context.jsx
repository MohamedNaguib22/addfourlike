/* eslint-disable no-undef */
import { createContext, useState } from "react";

export const PopUp = createContext();
// eslint-disable-next-line react/prop-types
export const ContextPopUp = ({ children }) => {
  const [popUP, setPopUp] = useState(false);
  function ModelUp() {
    setPopUp(!popUP);
  }
  return (
    <PopUp.Provider value={{ popUP, setPopUp, ModelUp }}>
      {children}
    </PopUp.Provider>
  );
};
