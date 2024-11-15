"use client";
import style from "./button.module.css";

const Iconbutton = ({ Icon, onClick }) => {
  return (
    <div className={style.icon} onClick={onClick}>
      <Icon fill={"var(--white-200)"} height={18} width={18} />
    </div>
  );
};

export default Iconbutton;
