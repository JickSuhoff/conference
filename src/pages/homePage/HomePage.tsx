import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import style from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (e: MouseEvent) => {
    if (
      !(e.target as HTMLElement).closest(`.${style.basicPaymentBtn}`) &&
      !(e.target as HTMLElement).closest(`.${style.vipPaymentBtn}`) &&
      !(e.target as HTMLElement).closest(`.${style.dropdown}`)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className={style.homePageWrapper}>
      <header>
        <p>header</p>
      </header>
      <main>
        <div className={style.payment}>
          <div className={style.basicPaymentBox}>
            <span className={style.basicHeader}>Basic</span>
            <span className={style.devider}></span>
            <p>1. Переднавчання з практичним завданням 🙌🏻</p>
            <p>2. Чат підтримки</p>
            <p>3. ДВА вебінари </p>
            <a
              target="_blank"
              className={style.basicPaymentBtn}
              href="https://secure.wayforpay.com/button/b164a187728e0"
            >
              ОПЛАТИТИ
            </a>
          </div>
          <div className={style.vipPaymentBox}>
            <span className={style.vipHeader}>VIP</span>
            <span className={style.devider}></span>
            <p>1. Переднавчання з практичним завданням 🙌🏻</p>
            <p>2. ДВА вебінари </p>
            <p>3. Енергетична практика</p>
            <p>4. Окремий чат з особистою участю Ірини</p>
            <a
              className={style.vipPaymentBtn}
              target="_blank"
              href="https://secure.wayforpay.com/button/b67f9b086b2df"
            >
              ОПЛАТИТИ
            </a>
          </div>
        </div>
        {dropdownOpen && (
          <div className={style.dropdown}>
            <input />
            <a className={style.dropdownPaymentButton}>ОПЛАТИТИ</a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
