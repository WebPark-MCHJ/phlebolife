import Logo from "../Logo";
import { BsInstagram, BsTelegram, BsFacebook, BsYoutube } from "react-icons/bs";
import { AiOutlineFieldTime, AiOutlinePhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import AppContext from "../../context/AppContext";
import { useContext, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Footer = () => {
  const { locale } = useRouter();
  const { db } = useContext(AppContext);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const { t: translate } = useTranslation("footer");

  const handleTabChange = (index) => {
    setCurrentTabIndex((prevState) => (prevState = index));
  };

  return (
    <footer className="footer">
      <div className="footer__about">
        <Logo />

        <p>{translate("about")}</p>

        <div className="socials">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/phlebolife/"
          >
            <BsInstagram />
          </a>
          <a rel="noreferrer" target="_blank" href="https://t.me/phlebolife">
            <BsTelegram />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/phlebolife/"
          >
            <BsFacebook />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCKR4jQwKNNkC3Ov7kJzGVGw"
          >
            <BsYoutube />
          </a>
        </div>
      </div>

      <div className="footer__tab">
        <div className="controllers">
          {db.contacts.map(({ city }, index) => (
            <button
              className={`${currentTabIndex == index ? "active" : ""}`}
              key={index}
              onClick={() => handleTabChange(index)}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="body">
          {db.contacts.map(
            ({ location, phone }, index) =>
              index === currentTabIndex && (
                <address className="address" key={index}>
                  <a className="address__location">{location}</a>
                  <a className="address__phone">
                    <AiOutlinePhone />
                    {phone.render}
                  </a>
                  <a className="address__email">
                    <MdOutlineEmail />
                    phlebolife@gmail.com
                  </a>
                  <p className="address__tg">
                    {locale === "ru"
                      ? "Подпишитесь на наш телеграм:"
                      : "Телеграм каналимизга обуна бўлинг"}
                    <a href="https://t.me/phlebolife">
                      {" "}
                      https://t.me/phlebolife
                    </a>
                  </p>
                </address>
              )
          )}
        </div>
      </div>

      <div className="footer__schedule">
        <AiOutlineFieldTime className="calendar" />
        <h3>
          <span className="accent">
            {translate("schedule.title.accent", { returnObject: true })}
          </span>{" "}
          {translate("schedule.title.original", { returnObject: true })}
        </h3>

        {currentTabIndex == 0 ? (
          <ul>
            <li>
              <span>{locale == "ru" ? "Понедельник" : "Душанба"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Вторник" : "Сешанба"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Среда" : "Чоршанба"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Четверг" : "Пайшанба"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Пятница" : "Жума"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Суббота" : "Шанба"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Воскресенье" : "Якшанба"} | </span>
              <span>{locale == "ru" ? "Выходной" : "Дам олиш куни"}</span>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <span>{locale == "ru" ? "Понедельник" : "Душанба"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Вторник" : "Сешанба"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Среда" : "Чоршанба"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Четверг" : "Пайшанба"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Пятница" : "Жума"} |</span>
              <span> 9:00 - 18:00</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Суббота" : "Шанба"} | </span>
              <span>{locale == "ru" ? "Выходной" : "Дам олиш куни"}</span>
            </li>
            <li>
              <span>{locale == "ru" ? "Воскресенье" : "Якшанба"} |</span>
              <span> 9:00 - 18:00 </span>
            </li>
          </ul>
        )}
      </div>
    </footer>
  );
};

export default Footer;
