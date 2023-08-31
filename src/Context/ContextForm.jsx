import { createContext, useState } from "react";

export const FormContext = createContext();
export const ContextForm = ({ children }) => {
  const [switchBtn, setSwitchBtn] = useState("login");
  function Switch(click) {
    setSwitchBtn(click);
  }
  return (
    <FormContext.Provider value={{ Switch, switchBtn, setSwitchBtn }}>
      {children}
    </FormContext.Provider>
  );
};
