import Header from "./components/Header";
import Card from "./components/Card";
import Basket from "./components/Basket";
import React from "react";

const arr = [
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 1299 },
  { name: "Мужские Кроссовки Nike Air Max 270", price: 4550 },
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 16900 },
  { name: "Кроссовки Puma X Aka Boku Future Rider", price: 10700 },
];

export const basketContext = React.createContext();

function App() {
  const [basketOpend, setBasketOpened] = React.useState(false);
  const openBasket = function () {
    setBasketOpened(!basketOpend);
  };
  return (
    <basketContext.Provider value={basketOpend}>
      <div className="App clear">
        <div className="wrapper">
          <Basket closeBasket={openBasket} />
          <Header onBasketClick={openBasket} />
          <div className="cards_container d-flex flex-wrap justify-around">
            {arr.map((item, index) => {
              return (
                <Card
                  imageUrl={`/img/sneakers/${index + 1}.jpg`}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </basketContext.Provider>
  );
}

export default App;
