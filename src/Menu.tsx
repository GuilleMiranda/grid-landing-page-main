import { useState } from "react";
import { type MenuType } from "./types/MenuProps";

const Menu = (props: MenuType) => {
  return (
    <div className={props.isActive ? "menu-open" : "menu-closed"}>
      <p>menu</p>
      <p>menu</p>
      <p>menu</p>
      <p>menu</p>
    </div>
  );
};

export default Menu;
