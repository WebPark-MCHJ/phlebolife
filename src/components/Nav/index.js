import Link from "next/link";
import { Link as SmoothLink } from "react-scroll";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { useState } from "react";
import LangChanger from "../LangChanger";

const Nav = ({ setActive, active }) => {
  const { db } = useContext(AppContext);
  const [activeLink, setActiveLink] = useState();

  const activeLinkHandler = (index) =>
    setActiveLink((prevState) => (prevState = index));

  return (
    <div className={`nav ${active ? "nav-active" : ""}`}>
      <ul className="nav-list">
        {db.navigation.map((item, index) => {
          if (item.path[0] === "/") {
            return (
              <li
                className={`${
                  index == activeLink
                    ? "nav-list__item nav-list__item--active"
                    : "nav-list__item"
                }`}
                key={index}
              >
                <Link
                  onClick={() => setActive(false)}
                  legacyBehavior
                  href={item.path}
                >
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          }
          return (
            <li
              className={`${
                index == activeLink
                  ? "nav-list__item nav-list__item--active"
                  : "nav-list__item"
              }`}
              key={index}
            >
              <SmoothLink
                onClick={() => setActive(false)}
                smooth={true}
                spy={true}
                to={item.path}
              >
                {item.title}
              </SmoothLink>
            </li>
          );
        })}
      </ul>

      <div className="nav-box">
        <LangChanger />
      </div>
    </div>
  );
};

export default Nav;