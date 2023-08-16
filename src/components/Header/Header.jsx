import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">BOOKSTORE</Link>
      <input placeholder="Поиск"></input>
      <Link to="/bookmarks">Закладки</Link>
      <Link to="/cart">КОРЗИНА</Link>
    </header>
  );
}

export default Header;
