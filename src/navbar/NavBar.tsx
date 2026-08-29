import styles from "./NavBar.module.css";
import iconMenu from "../assets/images/icon-menu.svg";
const NavBar = () => {
  const openMenu = () => {
    console.log("menu opens");
  };
  return (
    <nav>
      <p>* Bridge Collective</p>
      <img src={iconMenu} alt="Open Menu" tabIndex={0} onClick={openMenu} />
    </nav>
  );
};

export default NavBar;
