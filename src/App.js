import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Basket from "./components/Basket";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { BasketProvider } from "./components/Basket/basketContext";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://63a492ae2a73744b007b9672.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://63a492ae2a73744b007b9672.mockapi.io/basketItems")
      .then((res) => {
        setBasketItems(res.data);
      });
    axios.get('https://63a492ae2a73744b007b9672.mockapi.io/favourites')
      .then((res) => {
      setFavorites(res.data);
    })
  }, []);

  const addToBasket = (newItem) => {
    axios.post(
      "https://63a492ae2a73744b007b9672.mockapi.io/basketItems",
      newItem
    );
    setBasketItems((prevItem) => [...prevItem, newItem]);
  };

  const addToFavorites = (newItem) => {
    axios.post(
      "https://63a492ae2a73744b007b9672.mockapi.io/favourites",
      newItem
    );
    setFavorites((prevItem) => [...prevItem, newItem]);
  };

  const removeFromBasket = (id) => {
    axios.delete(
      `https://63a492ae2a73744b007b9672.mockapi.io/basketItems/${id}`
    );
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Router>
      <div className="App clear">
        <div className="wrapper">
          <BasketProvider>
            <Basket items={basketItems} onRemove={removeFromBasket} />
            <Header />
          </BasketProvider>

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  items={items}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  addToBasket={addToBasket}
                  addToFavorites={addToFavorites}
                  onChangeSearchValue={onChangeSearchValue}
                ></Home>
              }
            ></Route>
            <Route
              path="favorites"
              element={<Favorites items={favorites} setFavorites={setFavorites}></Favorites>}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
