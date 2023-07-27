import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import React from "react";

export function Header({ onSignOut, headerEmail }) {
  const location = useLocation({}); // пути показывает из строки поиска

  const isSignUp = location.pathname === "/sign-up";
  const isLogin = location.pathname === "/sign-in";
  const isLogginIn = location.pathname === "/";

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип страницы" />
      <div className="header__container">
        {isLogginIn && <p className="header__email">{headerEmail}</p>}
        {(isSignUp || isLogin) && (
          <Link className="header__link" to={isSignUp ? "/login" : "/sign-up"}>
            {isSignUp ? "Войти" : "Регистрация"}
          </Link>
        )}
        {isLogginIn && !isLogin && (
          <Link to="sign-in" className="header__exit" onClick={onSignOut}>
            Выйти
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
