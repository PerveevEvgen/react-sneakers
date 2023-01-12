import React from "react";
import Card from "../components/Card";
import { AppContext } from "../App";

function Favorites({ addToFavorites }) {
  const {favorites} = React.useContext(AppContext);
  console.log(favorites);
  return (
    <div className="d-flex flex-column align-center">
      <h2 className="">Закладки</h2>
      <div className="d-flex flex-wrap p-20 justify-around ">
        {favorites.map((item, index) => {
          return (
            <Card
              key={index}
              onFavorite={addToFavorites}
              favorited={true}
              {...item}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
export default Favorites;
