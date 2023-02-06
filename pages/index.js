import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../src/components/Common/Layout";
import db from "../src/database/db.json";
import AppContext from "../src/context/AppContext";
import Banner from "../src/components/Banner";
import About from "../src/components/About";
import Diseases from "../src/components/Diseases";
import Treatments from "../src/components/Treatments";
import Advantages from "../src/components/Advantages";
import Doctors from "../src/components/Doctors";
import Master from "../src/components/Master";
import { getData } from "../src/utils/fetchers";
import Head from "next/head";

const HomePage = ({ db, locale, database }) => {
  return (
    <AppContext.Provider value={{ database, db: db[locale], locale }}>
      <Head>
        <title>Главная | Клиника современной флебологии Phlebolife</title>
      </Head>

      <Layout>
        <Banner />
        <About />
        <Diseases data={database.chronicDiseases} />
        <Treatments data={database.treatmentServices} />
        <Advantages />
        <Doctors data={database.doctors} />
        <Master data={database.masters} />
      </Layout>
    </AppContext.Provider>
  );
};

export default HomePage;

export const getStaticProps = async ({ locale }) => {
  const { data: chronicDiseases } = await getData({
    url: "https://webpark.uz/",
    endpoint: `api/chronic-diseases?locale=${locale}`,
  });

  const { data: treatmentServices } = await getData({
    url: "https://webpark.uz/",
    endpoint: `api/treatment-services?locale=${locale}`,
  });

  const { data: doctors } = await getData({
    url: "https://webpark.uz/",
    endpoint: `api/doctors?populate=photo&locale=${locale}`,
  });

  const { data: masters } = await getData({
    url: "https://webpark.uz/",
    endpoint: `api/masterclasses?populate=*&locale=${locale}`,
  });

  return {
    props: {
      db,
      locale,
      database: {
        chronicDiseases,
        treatmentServices,
        doctors,
        masters,
      },
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
