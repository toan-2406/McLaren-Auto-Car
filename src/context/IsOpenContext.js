import { useState, createContext } from "react";

const IsOpenContext = createContext();

function IsOpenProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <IsOpenContext.Provider value={value}>{children}</IsOpenContext.Provider>
  );
}

export { IsOpenProvider, IsOpenContext };
