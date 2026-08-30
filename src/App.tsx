import NavBar from "./navbar/NavBar";
import Main from "./main/Main";
import { useState } from "react";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <>
      <NavBar toggleMenu={toggleMenu} />
      <Main isActive={isMenuActive} />
      <footer>
        <p>© 2026 Bridge Collective</p>
        <p>Registered charity 12345678</p>
      </footer>
    </>
  );
}

export default App;
