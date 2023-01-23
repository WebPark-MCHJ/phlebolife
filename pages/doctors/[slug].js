import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { getData } from "../../src/utils/fetchers";
import RichContent from "../../src/components/RichContent";

const DoctorPage = ({ data }) => {
	return (
		<section className="doctor-page page">
			<div className="doctor-page__main">
				<h1>{data.full_name}</h1>

				<RichContent>{data.body}</RichContent>
			</div>

			<div className="doctor-page__image">
				<img
					src={`https://webpark.uz${data.photo.data.attributes.url}`}
				/>
			</div>

			<div className="frame" />

			<Link className="doctor-page__home" href="/">
				<BsArrowLeft />
			</Link>
		</section>
	);
};

export const getServerSideProps = async ({ locale, params }) => {
	const { data } = await getData({
		url: "https://webpark.uz",
		endpoint: `/api/doctors?populate=photo&filters[slug]=${params.slug}&locale=${locale}`,
	});

	// const slugs = await getData({
	// 	url: "http:127.0.0.1:1337",
	// 	endpoint: `/api/chronic-diseases?locale=${locale}`,
	// });

	if (!data.length) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: data[0].attributes,
			// slugs,
			locale,
		},
	};
};

export default DoctorPage;
