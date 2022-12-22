import Header from "./components/Header";
import Card from "./components/Card";
import Basket from "./components/Basket";
import React from "react";
import { BasketProvider } from "./components/Basket/basketContext";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://63a492ae2a73744b007b9672.mockapi.io/items")
      .then((fetchRes) => {
        return fetchRes.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="App clear">
      <div className="wrapper">
        <BasketProvider>
          <Basket />
          <Header />
        </BasketProvider>
        <div className="cards_container d-flex flex-wrap justify-around">
          {items.map((item, index) => {
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
  );
}

export default App;
