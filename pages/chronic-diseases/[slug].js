import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getData } from "../../src/utils/fetchers";
import Layout from "../../src/components/Common/Layout";
import AppContext from "../../src/context/AppContext";
import db from "../../src/database/db.json";
import RichContent from "../../src/components/RichContent";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PageRequest from "../../src/components/PageRequest/PageRequest";

const ChronicDiseasesPage = ({ data, locale, slugs }) => {
  const [currentPath, setCurrentPath] = useState();
  const { asPath } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setCurrentPath(asPath);
    }, 500);
  }, [asPath]);

  return (
    <AppContext.Provider value={{ db: db[locale], locale }}>
      <Layout className={`page ${currentPath !== asPath ? "fadeIn" : ""}`}>
        <RichContent>{data.body}</RichContent>

        <aside>
          <PageRequest locale={locale} />

          <div className="links">
            <h2>{locale === "ru" ? "Другие болезни" : "Бошқа касалликлар"}</h2>

            <ul>
              {slugs.data.map((item) => {
                if (item.attributes.slug === data.slug) return;

                return (
                  <li key={`${item.id}-${item.attributes.slug}`}>
                    <Link href={`/chronic-diseases/${item.attributes.slug}`}>
                      {item.attributes.heading.substring(0, 30)}
                      ...
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </Layout>
    </AppContext.Provider>
  );
};

export default ChronicDiseasesPage;

export const getStaticProps = async ({ locale, params }) => {
  const { data } = await getData({
    url: "http://webpark.uz",
    endpoint: `/api/chronic-diseases?filters[slug]=${params.slug}&locale=${locale}`,
  });

  const slugs = await getData({
    url: "https://webpark.uz",
    endpoint: `/api/chronic-diseases?locale=${locale}`,
  });

  if (!data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data[0].attributes,
      slugs,
      locale,
      db,
      ...(await serverSideTranslations(locale, [
        "common",
        "banner",
        "request",
        "about",
        "diseases",
        "treatments",
        "advantages",
        "doctors",
        "masters",
        "footer",
      ])),
    },
  };
};

export async function getStaticPaths({ locale }) {
  const { data } = await getData({
    url: "https://webpark.uz",
    endpoint: `/api/chronic-diseases?locale=${locale}`,
  });

  const genPath = data.map((item) => {
    return { params: { slug: item.attributes.slug }, locale };
  });

  return {
    paths: [...genPath],
    fallback: "blocking", // can also be true or 'blocking'
  };
}
