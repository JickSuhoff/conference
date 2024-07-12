import Footer from "../../components/footer/Footer";
import headerFoto from "../../images/olga1-removebg-preview.png";
import doneIcon from "../../images/done.png";
import creatorFoto from "../../images/creatorFoto.jpg";
import instagramLogo from "../../images/instagram.svg";
import style from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={style.homePageWrapper}>
      <header>
        <img src={headerFoto} alt="headerFoto" />
        <div className={style.headerInfo}>
          <h1>З Жертви до Авторки свого Життя!</h1>
          <h3>19.07</h3>
          <button>Запис на конференцію</button>
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
            <p>
              <img src={doneIcon} alt="doneIcon" />
              Ірина Громова - КОУЧ та експерт зі зміни жіночого мислення через
              стан
            </p>
            <p>
              <img src={doneIcon} alt="doneIcon" />
              За останній рік Ірина організувала 10 трансформаційних івентів
              онлайн, через які пройшло близько 300 жінок
            </p>
            <p>
              <img src={doneIcon} alt="doneIcon" />
              Два роки особистих консультацій та десятки змінених жіночих
              мислень та станів
            </p>
            <p>
              <img src={doneIcon} alt="doneIcon" />
              ІНТЕНСИВИ Ірини «Все починається з тебе» пройшло більше 200 жінок
            </p>
          </div>
        </div>
        <h3>ПРОГРАМА</h3>
        <div className={style.programResultInfo}>
          <h4>СТРУКТУРА 🌪️</h4>
          <p>3 дні - 2 Вебінара!!!!</p>
          <div className={style.days}>
            <div className={style.day}>
              <span>День 1: ПІДГОТОВКА :</span>
              <p>
                ПРАКТИЧНЕ ЗАВДАННЯ в моменті, яке почне змінювати вашу
                РЕАЛЬНІСТЬ одразу в момент виконання ✨
              </p>
            </div>
            <div className={style.day}>
              <span>День 2 МИСЛЕННЯ :</span>
              <p>
                Як прокинутися та вийти з егрегора жертви системи 1 абсолют /
                квантове нічого 1 Звідки беруться ПРОГРАМИ ? 2 Програма ЖЕРТВИ і
                вихід з неї! 3 Три обличчя диявола 4 Вихід - ЧЕСНІСТЬ та ДОВІРА!
                5 Договір з собою 🙌🏻
              </p>
            </div>
            <div className={style.day}>
              <span>День 3 ЕНЕРГІЯ ПРОБУДЖЕННЯ:</span>
              <p>
                Навіщо ми тут? 2 Що таке енергія і де її брати? 3 Як працює
                енергія? Енергія любові, грошей, успіху та проявлення 4 Обираємо
                нову гілку реальності 5 Інтуїція як основний інструмент
                управління реальністю
              </p>
            </div>
          </div>
          <div className={style.programBox}>
            <p>Для КОГО? </p>
            <span>- для тебе, якщо ти відчуваєш виснаження </span>
            <span>
              - для тебе, якщо ти давно не відчуваєш справжнього задоволення від
              життя
            </span>
            <span>- для тебе, якщо ти живеш в тривозі та страхах</span>
            <span>
              - для тебе, якщо ти чітко вважаєш, що в тому, як ти живеш винна
              держава, Путін, батьки або будь-хто інший{" "}
            </span>
            <span>- для тебе, якщо ти відчуваєш постійне почуття вини</span>
            <span>- для тебе, якщо ти вже зранку прокидаєшся втомленою</span>
            <span>
              - для тебе, якщо ти вважаєш, що це все не для тебе і красиве
              багате життя потрібно заслужити
            </span>
          </div>
          <div className={style.programResults}>
            <p>Результати, які ви ОТРИМАЄТЕ?</p>
            <span>
              - вже після першого дня ти відчуєш прилив власної енергії ✨
            </span>
            <span>- вийдеш з програми «Я ЖЕРТВА»</span>
            <span>- пропрацюєш ТРИ СИЛИ Диявола </span>
            <span>- почуєш свій внутрішній голос та власні бажання ✨</span>
            <span>
              - зустрінешся зі справжньою СОБОЮ -перестанеш сумніватися і
              перейдеш до дій для реалізації своїх бажань ✨
            </span>
          </div>
        </div>
        <div className={style.payment}>
          <div className={style.basicPaymentBox}>
            <span className={style.basicHeader}>Basic</span>
            <span className={style.devider}></span>
            <p>1. Переднавчання з практичним завданням 🙌🏻</p>
            <p>2. Чат підтримки</p>
            <p>3. ДВА вебінари </p>
            <span className={style.price}>10$</span>
            <a
              className={style.basicPaymentBtn}
              target="_blank"
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
            <span className={style.price}>20$</span>
            <a
              className={style.vipPaymentBtn}
              target="_blank"
              href="https://secure.wayforpay.com/button/b67f9b086b2df"
            >
              ОПЛАТИТИ
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
