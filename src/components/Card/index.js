import styles from "./Card.module.scss";

function Card({ imageUrl }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.heart}
        src="/img/unliked-heart.svg"
        alt="unliked-heart"
      />
      <img
        width={135}
        height={122}
        src={imageUrl}
        alt="Sneakers"
        className={styles.card_img}
      />
      <h5>Sneakers</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>6448 руб.</b>
          <img
            width={32}
            className={styles.plus_btn}
            src="/img/plus.svg"
            alt="add-to-cart-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
