import Header from "./components/Header";
import Card from "./components/Card";
import Basket from "./components/Basket";
import React from "react";
import { BasketProvider } from "./components/Basket/basketContext";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://63a492ae2a73744b007b9672.mockapi.io/items")
      .then((fetchRes) => {
        return fetchRes.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  const addToBasket = (newItem) => {
    setBasketItems((prevItem) => [...prevItem, newItem]);
  };

  const onChangeSearchValue = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="App clear">
      <div className="wrapper">
        <BasketProvider>
          <Basket items={basketItems} />
          <Header />
        </BasketProvider>
        <div className="sub_header d-flex justify-between align-center">
          <h1>
            {searchValue
              ? `Поиск по запросу:"${searchValue}"`
              : " Все кроссовки"}
          </h1>
          <div className="search_container">
            <img src="/img/search.svg" alt="search-icon"></img>
            <input
              value={searchValue}
              onChange={onChangeSearchValue}
              placeholder="Поиск..."
            ></input>
            {searchValue && (
              <img
                onClick={() => {
                  setSearchValue("");
                }}
                className="clear btn_remove_text"
                src="img/btn-remove.svg"
                alt="btn-remove"
              ></img>
            )}
          </div>
        </div>
        <div className="cards_container d-flex flex-wrap justify-around">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  imageUrl={item.path}
                  name={item.name}
                  price={item.price}
                  itemData={item}
                  onPlus={(itemData) => {
                    addToBasket(itemData);
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
