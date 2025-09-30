import { useState, useEffect } from "react";

export default function useSize(){
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    hieght: window.innerHeight
  });

  useEffect(() => {
    function windowSizeHandler(){
      setWindowSize({
        width: window.innerWidth,
        hieght: window.innerHeight
      });
    };

    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
}