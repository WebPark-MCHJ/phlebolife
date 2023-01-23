import Section from "../Common/Section";
import Cards from "../Common/Cards";
import Card from "../Common/Card";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import ReadMore from "../Common/ReadMore";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { BiShowAlt } from "react-icons/bi";

const Treatments = ({ data }) => {
  const { db, locale } = useContext(AppContext);
  const { t: translate } = useTranslation("treatments");
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [limit, setLimit] = useState(3);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);

    setTimeout(() => {
      setAnimated(false);
    }, 500);
  }, [data, limit]);

  const handleLoadLess = () => {
    return setLimit((prev) => (prev = itemsPerPage));
  };

  const handleLoadMore = () => {
    const { length } = data;

    if (limit < length) {
      setLimit((prev) => (prev = prev + itemsPerPage));
    }

    if (limit % 2 === 0 && length % 2 !== 0) {
      return setLimit((prev) => (prev = length));
    }

    return (
      limit >= length - itemsPerPage && setLimit((prev) => (prev = length))
    );
  };

  return (
    <Section className="treatments">
      <span className="progress">
        <BiShowAlt /> {limit} / {data.length}
      </span>

      {locale === "ru" && (
        <h2 className="treatments__title">
          <span className="accent">
            {translate("title.original", { returnObjects: true })}{" "}
          </span>
          {translate("title.accent", { returnObjects: true })}
        </h2>
      )}

      {locale === "uz" && (
        <h2 className="treatments__title">
          {translate("title.original", { returnObjects: true })}{" "}
          <span className="accent">
            {translate("title.accent", { returnObjects: true })}
          </span>
        </h2>
      )}

      {data && (
        <Cards className="list-of-treatments">
          {data?.slice(0, limit).map(({ id, attributes }, index) => (
            <Card
              key={id + "-" + attributes.slug}
              className={`treatment ${animated ? "fadeIn" : ""}`}
            >
              <h3 className="treatment__name">{attributes.heading}</h3>
              {locale !== "uz" && (
                <ReactMarkdown
                  className="treatment__body"
                  children={
                    attributes.body &&
                    attributes.description.substring(0, 175) + "..."
                  }
                />
              )}
              <ReadMore
                className="treatment__link"
                href={`/treatment-services/${attributes.slug}`}
              >
                {translate("read-more")}
              </ReadMore>
            </Card>
          ))}
        </Cards>
      )}

      <button
        onClick={limit === data.length ? handleLoadLess : handleLoadMore}
        className="treatments__load-more"
      >
        {translate(`${limit === data.length ? "load-less" : "load-more"}`)}
      </button>
    </Section>
  );
};

export default Treatments;
