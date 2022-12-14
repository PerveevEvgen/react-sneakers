import styles from "./Card.module.scss";

function Card({ imageUrl, name,price }) {
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
      <h5>{name}</h5>

      <div className={styles.price}>
        <span>Цена:</span>
        <b>{`${price} руб.`}</b>
      </div>

      <img
        width={32}
        className={styles.plus_btn}
        src="/img/plus.svg"
        alt="add-icon"
      />
    </div>
  );
}

export default Card;
