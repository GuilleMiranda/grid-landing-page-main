import styles from "./NavBar.module.css";
import iconMenu from "../assets/images/icon-menu.svg";
import type { NavBarProps } from "../types/NavBarProps";

const NavBar = (props: NavBarProps) => {
  return (
    <nav>
      <p>* Bridge Collective</p>
      <img
        src={iconMenu}
        alt="Open Menu"
        tabIndex={0}
        onClick={props.toggleMenu}
      />
    </nav>
  );
};

export default NavBar;
