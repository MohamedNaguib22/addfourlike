import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [shouldStartCounting, setShouldStartCounting] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    if (inView) {
      setShouldStartCounting(true);
    }
  }, [inView]);

  useEffect(() => {
    let intervalId;
    if (shouldStartCounting) {
      intervalId = setInterval(() => {
        if (countRef.current < 300) {
          setCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(intervalId);
        }
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [shouldStartCounting]);

  return (
    <div ref={ref}>
      <div className="bg-gray-100 h-[80px] w-[250px] ml-5 rounded-md text-black text-[30px] flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

export default Timer;
