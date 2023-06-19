import Head from 'next/head'
import { loadSingleSanityContentByType, loadAllSanityContentByType } from '../utils/sanity-actions'
import GridWrapper from '../components/Layout/GridWrapper'
import ScrollSlider from '../components/ScrollSlider';
import TextSection from '../components/TextSection'
import LeaveEmailForm from '../components/LeaveEmailForm';
import SEO from "../components/SEO";

export default function Contact({ siteSettings }) {
	return (
		<main className="relative pt-36">
			<SEO
				title={"Mindset"}
				description={siteSettings.meta_description}
				image={null}
				slug={"mindset"}
				siteName={siteSettings.meta_title}
			/>
			<TextSection
				color={"purple"}
				title={siteSettings?.mindset_title}
				text={siteSettings?.mindset_subtitle}
				highlightedWord={null}
			/>

			<ScrollSlider
				slides={[
					{
						title: siteSettings?.mindset_slide_1_title,
						text: siteSettings?.mindset_slide_1_text,
					},
					{
						title: siteSettings?.mindset_slide_2_title,
						text: siteSettings?.mindset_slide_2_text,
					},
				]}
			/>

			<TextSection
				color={"purple"}
				title={siteSettings.mindset_whitepaper_title}
				text={siteSettings.mindset_whitepaper_subtitle}
				highlightedWord={null}
			/>

			<GridWrapper className="flex justify-center">
				<div className="text-center">
					<h2 className="text-grey text-lg mb-4">
						{siteSettings.mindset_whitepaper_cta}
					</h2>
					<LeaveEmailForm />
				</div>
			</GridWrapper>
		</main>
	);
}

export const getStaticProps = async () => {
	const siteSettings = await loadSingleSanityContentByType(
		"siteSettings",
		null
	);

	if (!siteSettings) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			siteSettings,
		},
	};
};
