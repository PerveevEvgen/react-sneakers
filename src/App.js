import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Basket from "./components/Basket";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { BasketProvider } from "./components/Basket/basketContext";
import axios from "axios";


function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);
  const[isLoading, setIsLoading] =React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      const basketResponse = await axios.get(
        "https://63a492ae2a73744b007b9672.mockapi.io/basketItems"
      );
      const itemsResponse = await axios.get(
        "https://63a492ae2a73744b007b9672.mockapi.io/items"
      );
      const favoritesResponse = await axios.get(
        "https://63a492ae2a73744b007b9672.mockapi.io/favourites"
      );
      setIsLoading(false)
      setBasketItems(basketResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const addToBasket = async (newItem) => {
    console.log(basketItems);
    console.log(newItem);
    try {
      if (basketItems.find((item) => Number(item.id) === Number(newItem.id))) {
        console.log(true);
        setBasketItems((prevItem) =>
          prevItem.filter((item) => Number(item.id) !== Number(newItem.id))
        );
        axios.delete(
          `https://63a492ae2a73744b007b9672.mockapi.io/basketItems/${newItem.id}`,
          newItem
        );
      } else {
        console.log(false);
        const { data } = await axios.post(
          "https://63a492ae2a73744b007b9672.mockapi.io/basketItems",
          newItem
        );
        setBasketItems((prevItem) => [...prevItem, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorites = async (newItem) => {
    try {
      if (favorites.find((obj) => obj.id === newItem.id)) {
        axios.delete(
          `https://63a492ae2a73744b007b9672.mockapi.io/favourites/${newItem.id}`
        );
        setFavorites((prevItem) =>
          prevItem.filter((item) => item.id !== newItem.id)
        );
      } else {
        const { data } = await axios.post(
          "https://63a492ae2a73744b007b9672.mockapi.io/favourites",
          newItem
        );

        setFavorites((prevItem) => [...prevItem, data]);
      }
    } catch (error) {
      console.error();
      alert(`Ошибка`);
    }
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
                  basketItems={basketItems}
                  isLoading={isLoading}
                ></Home>
              }
            ></Route>
            <Route
              path="favorites"
              element={
                <Favorites
                  items={favorites}
                  addToFavorites={addToFavorites}
                ></Favorites>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
