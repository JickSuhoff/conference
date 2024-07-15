import React, { useRef } from "react";
import Footer from "../../components/footer/Footer";
import headerFoto from "../../images/olga1-removebg-preview.png";
import doneIcon from "../../images/done.png";
import creatorFoto from "../../images/creatorFoto.jpg";
import instagramLogo from "../../images/instagram.svg";
import style from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  const creatorInfo = [
    "Ірина Громова - КОУЧ та експерт зі зміни жіночого мислення через стан",
    "За останній рік Ірина організувала 10 трансформаційних івентів онлайн, через які пройшло близько 300 жінок",
    "Два роки особистих консультацій та десятки змінених жіночих мислень та станів",
    "ІНТЕНСИВИ Ірини «Все починається з тебе» пройшло більше 200 жінок",
  ];

  const programDays = [
    {
      day: "День 1: ПІДГОТОВКА",
      description:
        "ПРАКТИЧНЕ ЗАВДАННЯ в моменті, яке почне змінювати вашу РЕАЛЬНІСТЬ одразу в момент виконання ✨",
    },
    {
      day: "День 2 МИСЛЕННЯ",
      description: [
        "Як прокинутися та вийти з егрегора жертви системи",
        "Абсолют / квантове нічого",
        "Звідки беруться ПРОГРАМИ?",
        "Програма ЖЕРТВИ і вихід з неї!",
        "Три обличчя диявола",
        "Вихід - ЧЕСНІСТЬ та ДОВІРА!",
        "Договір з собою 🙌🏻",
      ],
    },
    {
      day: "День 3 : ЕНЕРГІЯ ПРОБУДЖЕННЯ",
      description: [
        "Навіщо ми тут?",
        "Що таке енергія і де її брати?",
        "Як працює енергія? Енергія любові, грошей, успіху та проявлення",
        "Обираємо нову гілку реальності",
        "Інтуїція як основний інструмент управління реальністю",
      ],
    },
  ];

  const programForWho = [
    "для тебе, якщо ти відчуваєш виснаження",
    "для тебе, якщо ти давно не відчуваєш справжнього задоволення від життя",
    "для тебе, якщо ти живеш в тривозі та страхах",
    "для тебе, якщо ти чітко вважаєш, що в тому, як ти живеш винна держава, Путін, батьки або будь-хто інший",
    "для тебе, якщо ти відчуваєш постійне почуття вини",
    "для тебе, якщо ти вже зранку прокидаєшся втомленою",
    "для тебе, якщо ти вважаєш, що це все не для тебе і красиве багате життя потрібно заслужити",
  ];

  const programResults = [
    "вже після першого дня ти відчуєш прилив власної енергії ✨",
    "вийдеш з програми «Я ЖЕРТВА»",
    "пропрацюєш ТРИ СИЛИ Диявола",
    "почуєш свій внутрішній голос та власні бажання ✨",
    "зустрінешся зі справжньою СОБОЮ - перестанеш сумніватися і перейдеш до дій для реалізації своїх бажань ✨",
  ];

  const getCurrentPrices = () => {
    const today = new Date();
    const basicInitialPrice = 10;
    const vipInitialPrice = 20;
    const basicSecondChangeDate = new Date("2024-07-17");
    const vipSecondChangeDate = new Date("2024-07-17");

    let basicPrice = basicInitialPrice;
    let vipPrice = vipInitialPrice;

    if (today >= basicSecondChangeDate) {
      basicPrice = 15;
    }

    if (today >= vipSecondChangeDate) {
      vipPrice = 25;
    }

    return { basicPrice, vipPrice };
  };

  const { basicPrice, vipPrice } = getCurrentPrices();

  const paymentOptions = [
    {
      type: "Basic",
      price: `${basicPrice}$`,
      features: [
        "Переднавчання з практичним завданням 🙌🏻",
        "Чат підтримки",
        "ДВА вебінари",
      ],
      link: "https://secure.wayforpay.com/button/b4381bbfe274e",
      styleBox: style.basicPaymentBox,
      styleHeader: style.basicHeader,
      stylePaymentBtn: style.basicPaymentBtn,
      stylePayment: style.boxpayment,
      styleInfo: style.boxinfo,
    },
    {
      type: "VIP",
      price: `${vipPrice}$`,
      features: [
        "Переднавчання з практичним завданням 🙌🏻",
        "ДВА вебінари",
        "Енергетична практика",
        "Окремий чат з особистою участю Ірини",
      ],
      link: "https://secure.wayforpay.com/button/b304050e50fd8",
      styleBox: style.vipPaymentBox,
      styleHeader: style.vipHeader,
      stylePaymentBtn: style.vipPaymentBtn,
      stylePayment: style.boxpaymentVip,
      styleInfo: style.boxinfoVip,
    },
  ];

  const paymentRef = useRef<HTMLDivElement>(null);

  const scrollToPayment = () => {
    if (paymentRef.current) {
      paymentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.homePageWrapper}>
      <header>
        <img src={headerFoto} alt="headerFoto" />
        <div className={style.headerInfo}>
          <h1>З Жертви до Авторки свого Життя!</h1>
          <h3>19.07</h3>
          <button onClick={scrollToPayment}>ЗАПИС на СУПЕР інтенсив</button>
        </div>
      </header>
      <span className={style.devider}></span>
      <main>
        <div className={style.creatorInfoBox}>
          <div className={style.creatorBox}>
            <img
              src={creatorFoto}
              alt="creatorFoto"
              className={style.creatorFoto}
            />
            <div className={style.creatorInfo}>
              <p>ІРИНА ГРОМОВА</p>
              <a href="https://www.instagram.com/egoira?igsh=M3I3MDJraHZ1ejhv">
                <img src={instagramLogo} alt="instagramLogo" />
              </a>
            </div>
          </div>
          <div className={style.moreCreatorsInfo}>
            {creatorInfo.map((info, index) => (
              <p key={index}>
                <img src={doneIcon} alt="doneIcon" />
                {info}
              </p>
            ))}
          </div>
        </div>
        <h3>ПРОГРАМА</h3>
        <div className={style.programResultInfo}>
          <h4>СТРУКТУРА 🌪️</h4>
          <p>3 дні - 2 Вебінара!!!!</p>
          <div className={style.days}>
            {programDays.map((dayInfo, index) => (
              <div className={style.day} key={index}>
                <span>{dayInfo.day}:</span>
                {Array.isArray(dayInfo.description) ? (
                  dayInfo.description.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                  ))
                ) : (
                  <p>{dayInfo.description}</p>
                )}
              </div>
            ))}
          </div>
          <div className={style.programBox}>
            <p>Для КОГО?</p>
            {programForWho.map((info, index) => (
              <span key={index}>- {info} </span>
            ))}
          </div>
          <div className={style.programResults}>
            <p>Результати, які ви ОТРИМАЄТЕ?</p>
            {programResults.map((result, index) => (
              <span key={index}>- {result}</span>
            ))}
          </div>
        </div>
        <div className={style.payment} ref={paymentRef}>
          {paymentOptions.map((option, index) => (
            <div className={option.styleBox} key={index}>
              <div className={option.styleInfo}>
                <h3 className={option.styleHeader}>{option.type}</h3>
                <span className={style.devider}></span>
                {option.features.map((feature, idx) => (
                  <p key={idx}>{feature}</p>
                ))}
              </div>
              <div className={option.stylePayment}>
                <span className={style.price}>{option.price}</span>
                <a
                  className={option.stylePaymentBtn}
                  target="_blank"
                  href={option.link}
                  rel="noopener noreferrer"
                >
                  ОПЛАТИТИ
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
