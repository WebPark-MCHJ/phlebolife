import "../styles/app.scss";
import { appWithTranslation } from "next-i18next";
import { usePageLoading } from "../src/utils/usePageLoading";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {isPageLoading ? (
        <div className="loading-wrapper">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <p>
            {locale == "ru"
              ? "Пожалуйста подождите, страница загружается..."
              : "Илтимос кутинг, сахифа юкланмоқда..."}
          </p>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default appWithTranslation(MyApp);
