import React, { useState, useCallback, useEffect } from "react";
import config from "@config/config.json";
import MobileNav from "../partials/MobileNav";
import DesktopNav from "../partials/DesktopNav";
import MyContext from "./MyContext";
const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(`(max-width:${width}px)`);
      media.addEventListener('change', updateTarget);

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener('change', updateTarget);
    }
  }, [width, updateTarget]);

  return targetReached;
};

const Listingtabs = () => {
  const isBreakpoint = useMediaQuery(768);

  return (
    
    <>
    <MyContext.Provider value={{buttons, filter }}>
      {isBreakpoint ? (
        <div>
          <MobileNav />
        </div>
      ) : (
        <div>
          <DesktopNav />
        </div>
      )}
     </MyContext.Provider>
    </>
  );
};

export default Listingtabs;