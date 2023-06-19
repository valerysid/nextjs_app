import GridWrapper from '../../components/Layout/GridWrapper'
import Head from "next/head";
import {
	loadAllSanityContentByType,
	loadSingleSanityContentByType,
} from "../../utils/sanity-actions";
import CareerCards from "../../components/CareerCard";
import { CheckBoxListItem } from "../../components/HomeSections/FifthSection";
import SEO from "../../components/SEO";

export default function PostOverzicht({ posts, siteSettings }) {
	return (
		<main>
			<SEO
				title={siteSettings.career_title}
				description={siteSettings.career_text}
				image={null}
				slug={"career"}
				siteName={siteSettings.meta_title}
			/>

			<div className="relative pt-36">
				<GridWrapper className="flex flex-wrap lg:flex-nowrap justify-center">
					<div className="w-full lg:w-5/12 xl:w-4/12">
						<h1 className="text-6xl xl:text-7xl">
							{siteSettings.career_title}
						</h1>
						<div className="p-4 md:py-4 md:px-8 rounded-[25px] bg-medium-grey mt-4 mb-4">
							{siteSettings.career_list.map((item) => (
								<CheckBoxListItem key={item} text={item} />
							))}
						</div>
					</div>
					<div className="hidden xl:block w-1/12"></div>
					<div className="w-full lg:w-6/12 xl:w-5/12 md:pl-8">
						<p className="text-3xl">{siteSettings.career_text}</p>
						<p className="text-xl mt-8 whitespace-pre-line">
							{siteSettings.career_text_small}
						</p>
					</div>
				</GridWrapper>

				<GridWrapper className="flex justify-center mt-16">
					<div className="w-full max-w-4xl 2xl:max-w-4xl">
						<h2 className="text-[#7C5FD0] text-center mb-4">Vacancies</h2>
						{posts.map((post) => (
							<CareerCards key={post._id} career={post} />
						))}
					</div>
				</GridWrapper>
			</div>
		</main>
	);
}

export const getStaticProps = async ({ params }) => {
	const posts = await loadAllSanityContentByType("career");
	const siteSettings = await loadSingleSanityContentByType(
		"siteSettings",
		null
	);

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			posts,
			siteSettings,
		},
	};
};

