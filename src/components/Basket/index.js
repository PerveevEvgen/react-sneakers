import styles from "./Basket.module.scss";

function Basket() {
  return (
    <div className={styles.overlayVisible}>
      <div className={styles.drawer}>
        <div className={styles.basket_header}>
          <h2>Корзина</h2>
          <img className="cu-p" src="img/btn-remove.svg" alt="Close" />
        </div>

        <div className={styles.basket_item_cont}>
          <div className={styles.basket_item}>
            <div className={styles.img_wrapper}>
              <img width={70} src="/img/sneakers/2.jpg" alt="product-img" />
            </div>
            <div className={styles.text_wrapper}>
              <h4 className={styles.product_name}>Sneakers cool</h4>
              <p className={styles.product_price}>1200 ua</p>
            </div>
            <div className={styles.btn_wrapper}>
              <img
                className={styles.btn_remove}
                src="img/btn-remove.svg"
                alt="btn-remove"
              ></img>
            </div>
          </div>
          <div className={styles.basket_item}>
            <div className={styles.img_wrapper}>
              <img width={70} src="/img/sneakers/2.jpg" alt="product-img" />
            </div>
            <div className={styles.text_wrapper}>
              <h4 className={styles.product_name}>Sneakers cool</h4>
              <p className={styles.product_price}>1200 ua</p>
            </div>
            <div className={styles.btn_wrapper}>
              <img
                className={styles.btn_remove}
                src="img/btn-remove.svg"
                alt="btn-remove"
              ></img>
            </div>
          </div>
          <div className={styles.basket_item}>
            <div className={styles.img_wrapper}>
              <img width={70} src="/img/sneakers/2.jpg" alt="product-img" />
            </div>
            <div className={styles.text_wrapper}>
              <h4 className={styles.product_name}>Sneakers cool</h4>
              <p className={styles.product_price}>1200 ua</p>
            </div>
            <div className={styles.btn_wrapper}>
              <img
                className={styles.btn_remove}
                src="img/btn-remove.svg"
                alt="btn-remove"
              ></img>
            </div>
          </div>
        </div>

        <div className={styles.basket_total}>
          <ul className="clear d-flex flex-column">
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>{15000} руб. </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>{150} руб. </b>
            </li>
          </ul>
          <button className={styles.greenButton}>
            Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
