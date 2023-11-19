"use client"
import { useEffect, useState } from "react";
import Mobile from "./mobile/mobile";

const Display = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* {windowWidth > 768 ? <Tablet /> : <Mobile />} */}
      <Mobile windowWidth={windowWidth} />
    </div>
  );
}

export default Display