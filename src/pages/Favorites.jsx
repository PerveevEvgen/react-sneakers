import React from "react";
import Card from "../components/Card";
import styles from "../components/Card/Card.module.scss";

function Favorites({ items, addToFavorites }) {
  return (
    <div className="d-flex flex-column align-center">
      <h2 className="">Закладки</h2>
      <div className="d-flex flex-wrap p-20 justify-around ">
        {items.map((item, index) => {
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
