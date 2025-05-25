import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <MainContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => useContext(MainContext);