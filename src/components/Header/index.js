import styles from "./Header.module.scss";
import { useBasketContext } from "./../Basket/basketContext";
import { Link } from "react-router-dom";

function Header() {
  const { basketToggle } = useBasketContext();
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.left_side}>
            <img width={40} height={40} src="img/logo.png" alt="Logo" />
            <div>
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <div className={styles.right_side}>
          <div className="mr-30 cu-p" onClick={basketToggle}>
            <img width={18} height={18} src="img/cart.svg" alt="basket" />
            <span>1200 руб.</span>
          </div>
          <div className="mr-20 cu-p">
            <Link to="favorites">
              <img
                width={18}
                height={18}
                src="img/heart.svg"
                alt="favourites"
              />
            </Link>
          </div>
          <div>
            <img width={18} height={18} src="img/user.svg" alt="user-profile" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
