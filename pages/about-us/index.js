import Layout from "../../src/components/Common/Layout";
import db from "../../src/database/db.json";
import AppContext from "../../src/context/AppContext";
import { BsArrowLeft } from "react-icons/bs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Head from "next/head";

const AboutPage = ({ db, locale }) => {
	return (
		<AppContext.Provider value={{ db: db[locale], locale }}>
			<Layout className="about-page">
				<section>
					<h2>
						О клинике{" "}
						<span className="accent">современной флебологии</span>
					</h2>

					<p>
						Флебологическая клиника "PHLEBOLIFE" - специализируется
						на проведении консультации, диагностики и лечении
						хронических заболеваний вен нижних конечностей по самым
						современным мировым стандартам.
					</p>

					<p>
						Врачи-флебологи клиники проходили обучение у самых
						лучших специалистов стран Европы (Германия, Латвия,
						Австрия), России и Южной Кореи.
					</p>

					<p>
						Наши специалисты первыми в стране начали выполнять
						Эндовенозные Лазерные операции при варикозной болезни
						вен нижних конечностей.
					</p>

					<p>
						Благодаря этой операции болле тысячу пациентов получили
						возможность идти на хирургическую манипуляцию, после
						которой не остается шрамов, и не требуется
						госпитализация пациента.
					</p>

					<p>
						Каждый пролеченный нами пациент в течение длительного
						времени находится под нашим наблюдением бесплатно.
						Пациент обратившийся с венозной проблемой в Клинику
						флебологии в Ташкенте не уйдет без положительного
						результата.
					</p>

					<p>
						Отличительная особенность Клиники флебологии в Ташкенте
						"PHLEBOLIFE" - её надежность. Профессионализм
					</p>

					<p>
						наших специалистов не стоит на месте, и следующим
						этапом, мы предложим еще лучшие возможности для
						комфортного лечения друзей и близких наших пациентов.
					</p>

					<Link className="about-page__home" href="/">
						<BsArrowLeft />
					</Link>
				</section>
			</Layout>
		</AppContext.Provider>
	);
};

export default AboutPage;

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			db,
			locale,
			...(await serverSideTranslations(locale, [
				"common",
				"banner",
				"about",
				"diseases",
				"treatments",
				"advantages",
				"doctors",
				"masters",
				"footer",
				"request",
			])),
		},
	};
};
