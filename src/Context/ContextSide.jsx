/* eslint-disable no-undef */
import { createContext, useState } from "react";

export const SideNav = createContext();
// eslint-disable-next-line react/prop-types
export const ContextSide = ({ children }) => {
  const [Side, setSide] = useState(false);
  function SideShow() {
    setSide(!Side);
  }
  return (
    <SideNav.Provider value={{ Side, setSide, SideShow }}>
      {children}
    </SideNav.Provider>
  );
};
