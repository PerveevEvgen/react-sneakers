import styles from "./Card.module.scss";
import React from "react";
import { useState } from "react";
import ContentLoader from "react-content-loader";

function Card({
  id,
  imageUrl,
  name,
  price,
  onPlus,
  onFavorite,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [favAdded, setFavAdded] = useState(favorited);
  const [basketAdded, setBasketAdded] = useState(added);

  function onClickHeart() {
    setFavAdded(!favAdded);
    onFavorite({ id, imageUrl, name, price });
  }

  function onClickPlus() {
    setBasketAdded(!basketAdded);
    onPlus({ id, imageUrl, name, price });
  }

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={250}
          viewBox="0 0 150 250"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="105" rx="5" ry="7" width="150" height="23" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="140" rx="5" ry="7" width="90" height="23" />
          <rect x="0" y="200" rx="5" ry="7" width="80" height="35" />
          <rect x="109" y="200" rx="5" ry="7" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Card;
