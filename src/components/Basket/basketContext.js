import React, { useContext, useState } from "react";

const BasketContext = React.createContext();

export const useBasketContext = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basketState, setBasketState] = useState(false);
  const basketToggle = function () {
    setBasketState(!basketState);
  };
  return (
    <BasketContext.Provider
      value={{
        visible: basketState,
        basketToggle,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
