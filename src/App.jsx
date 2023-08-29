import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes } from "react-router-dom";
export default function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Routes>
        <></>
      </Routes>
    </>
  );
}
