// import Card from "../components/Card";
import React from "react";
import styles from "../components/Card/Card.module.scss";

function Favorites({ items }) {
    return (
      <div className="d-flex flex-column align-center">
        <h2 className="">Закладки</h2>
        <div className="d-flex flex-wrap p-20 justify-around ">
          {items.map((item, index) => {
            return (
              <div className={styles.card}>
                <img
                  width={135}
                  height={122}
                  src={item.imageUrl}
                  alt="Sneakers"
                  className={styles.card_img}
                />
                <h5>{item.name}</h5>

                <div className={styles.price}>
                  <span>Цена:</span>
                  <b>{`${item.price} руб.`}</b>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
export default Favorites;
