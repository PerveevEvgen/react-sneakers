import styles from "./Card.module.scss";
import React from "react";
import { useState } from "react";

function Card({ imageUrl, name, price }) {
  const [favAdded, setFavAdded] = React.useState(false);
  const [basketAdded, setBasketAdded] = React.useState(false);

  function onClickHeart() {
    setFavAdded(!favAdded);
  }

  function onClickPlus() {
    setBasketAdded(!basketAdded);
  }

  return (
    <div className={styles.card}>
      <img
        onClick={onClickHeart}
        className={styles.heart}
        src={favAdded ? "/img/liked.svg" : "/img/unliked-heart.svg"}
        alt="unliked-heart"
      />
      <img
        width={135}
        height={122}
        src={imageUrl}
        alt="Sneakers"
        className={styles.card_img}
      />
      <h5>{name}</h5>

      <div className={styles.price}>
        <span>Цена:</span>
        <b>{`${price} руб.`}</b>
      </div>

      <img
        onClick={onClickPlus}
        width={32}
        className={styles.plus_btn}
        src={basketAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
        alt="add-icon"
      />
    </div>
  );
}

export default Card;
