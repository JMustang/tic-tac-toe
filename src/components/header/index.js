import React from "react";
import "./styles.css";
import Logo from "../../object/Logo";
import Sobre from "../../object/Sobre";
import Menu from "../../object/Menu";

const Header = () => (
  <header className="header">
    <Logo />
    <Sobre />
    <Menu />
  </header>
);

export default Header;
