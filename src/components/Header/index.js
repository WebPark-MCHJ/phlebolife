import Logo from "../Logo";
import Nav from "../Nav";
import LangChanger from "../LangChanger";
import Hamburger from "hamburger-react";

//icon
import { useEffect, useState } from "react";

const Header = () => {
  let [active, setActive] = useState(false);

  useEffect(() => {
    active
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [active]);

  return (
    <header className="header">
      <Logo />
      <Nav setActive={setActive} active={active} />
      <div className="header__box">
        <LangChanger setActive={setActive} />
      </div>
      <button className="header__btn" onClick={() => setActive(!active)}>
        <Hamburger toggled={active} toggle={setActive} size={25} />
      </button>
    </header>
  );
};

export default Header;
