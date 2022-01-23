import { useState, createContext } from "react";

const HideFooterContext = createContext();

function HideFooterProvider({ children }) {
  const [hideFooter, setHideFooter] = useState(true);

  const value = {
    hideFooter,
    setHideFooter,
  };

  return (
    <HideFooterContext.Provider value={value}>
      {children}
    </HideFooterContext.Provider>
  );
}

export { HideFooterProvider, HideFooterContext };
