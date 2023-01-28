import { createContext, useContext, useState } from "react";

const ClickContext = createContext(0, () => {});

export default function useClickContext() {
  return useContext(ClickContext);
}

export const ClickContextProvider = ({ children }) => {
  const [clickAmount, setClickAmount] = useState(0);
  const increment = () => setClickAmount((amount) => amount + 1);
  return (
    <ClickContext.Provider value={[clickAmount, increment]}>
      {children}
    </ClickContext.Provider>
  );
};
