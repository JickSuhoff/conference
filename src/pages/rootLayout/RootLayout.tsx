import { Outlet } from "react-router-dom";
import style from "./RootLayout.module.scss";

const RootLayout = () => {
  return (
    <div className={style.rootWrapper}>
      <Outlet />
    </div>
  );
};

export default RootLayout;
