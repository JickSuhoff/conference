import { NavLink } from "react-router-dom";
import instagramLogo from "../../images/instagram.svg";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <a href="https://www.instagram.com/egoira?igsh=M3I3MDJraHZ1ejhv">
        <img src={instagramLogo} alt="instagramLogo" />
      </a>
      <div className={style.links}>
        <NavLink to={"/public-offerts-page"}>Договір публічної оферти</NavLink>
        <NavLink to={"/privacy-policy-page"}>Політика конфіденційності</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
