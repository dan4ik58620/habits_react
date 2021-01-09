import React from "react";
import PropTypes from "prop-types";
import styles from "./Auth.module.css";
const Auth = ({ src, login, register }) => {
  console.log(src, login, register);
  // let num ="3";
  return (
    <>
      <div className={styles.auth}>
        <div className={styles.logoWrapper}></div>
        <p>{}</p>
        <button className="styles.loginBtn" type="button">
          {login}
        </button>
        <button className="styles.loginBtn" type="button">
          {register}
        </button>
      </div>
      <p>Component Auth</p>
    </>
  );
};

Auth.defaultProps = {
  src: "../../images/logo.png",
  login: "вход",
  register: "зарегестрироваться",
};
//ПРОСТАЯ ПЕРВИЧНАЯ ПРОВЕРКА ТИПА ДАННЫХ ПОЛУЧЕННОГО ПРОПСА
Auth.propTypes = {
  src: PropTypes.string,
  login: PropTypes.string,
  register: PropTypes.string,
};
export default Auth;
