import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./StyleComponents.css";
import { Logo } from "./Icons";

const NavBar = () => {
  return (
    <>
      <div className="conteiner">
        <nav className="nav">
          <Logo />
          <ul>
            <li>
              <NavLink to="/" end>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/todolist">ToDoList</NavLink>
            </li>
            <li>
              <NavLink to="/pokemon">Pokemon</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
