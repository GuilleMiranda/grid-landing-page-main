import { type MenuType } from "./types/MenuProps";

const Menu = (props: MenuType) => {
  return (
    <div className={`menu ${props.isActive ? "menu-open" : "menu-closed"}`}>
      <ul>
        <li>About</li>
        <li>Our Work</li>
        <li>Partners</li>
        <li>Annual Report</li>
        <li>Donate</li>
      </ul>
    </div>
  );
};

export default Menu;
