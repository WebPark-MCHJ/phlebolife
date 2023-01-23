import Logo from "../Logo";
import Nav from "../Nav";
import LangChanger from "../LangChanger";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <LangChanger />
    </header>
  );
};

export default Header;
