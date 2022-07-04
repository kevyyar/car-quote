import { createContext } from "react";

export const CarQuoteContext = createContext();

export const CarQuoteProvider = ({ children }) => {

  return (
    <CarQuoteContext.Provider>
      {children}
    </CarQuoteContext.Provider>
  );
}
