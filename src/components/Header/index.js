import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.wrapper}>
      <header className="d-flex justify-between align-center p-40 clear">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logotype" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 cu-p">
            <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
            <span>1200 руб.</span>
          </li>
          <li className="mr-20 cu-p">
            <img width={18} height={18} src="img/heart.svg" alt="Закладки" />
          </li>
          <li>
            <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;