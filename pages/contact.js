import Head from 'next/head'
import { loadSingleSanityContentByType } from '../utils/sanity-actions'
import GridWrapper from '../components/Layout/GridWrapper'
import Maps from '../components/Maps'
import SEO from "../components/SEO";
export default function Contact({ siteSettings }) {
	return (
		<main className="relative pt-36">
			<SEO
				title={"Contact"}
				description={siteSettings.email}
				image={null}
				slug={"contact"}
				siteName={siteSettings.meta_title}
			/>

			<div className="flex flex-wrap justify-center">
				<GridWrapper
					className={
						"w-full lg:w-10/12 relative justify-between flex flex-wrap md:flex-nowrap"
					}
				>
					<h1 className="block w-full md:w-5/12 text-8xl text-white ">
						Contact
					</h1>
					<div className="text-xl lg:text-2xl w-full md:w-4/12">
						<p className="pb-4">{siteSettings.adres}</p>

						<a
							href={`mailto:${siteSettings.email}`}
							className="mt-4 flex items-center "
						>
							<svg
								className="mr-2"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="18"
								viewBox="0 0 24 18"
							>
								<path
									id="Path_764"
									data-name="Path 764"
									d="M11.545-12.056c-1.05.816-2.437,1.856-7.219,5.33C3.375-6.033,1.673-4.481,0-4.5-1.664-4.486-3.333-6-4.322-6.727-9.1-10.2-10.5-11.236-11.545-12.052a.28.28,0,0,0-.455.22V-2.25A2.251,2.251,0,0,0-9.75,0H9.75A2.251,2.251,0,0,0,12-2.25v-9.586A.282.282,0,0,0,11.545-12.056ZM0-6c1.088.019,2.653-1.369,3.441-1.941,6.22-4.514,6.694-4.908,8.128-6.033A1.122,1.122,0,0,0,12-14.859v-.891A2.251,2.251,0,0,0,9.75-18H-9.75A2.251,2.251,0,0,0-12-15.75v.891a1.129,1.129,0,0,0,.431.886c1.434,1.12,1.908,1.519,8.128,6.033C-2.653-7.369-1.088-5.981,0-6Z"
									transform="translate(12 18)"
									fill="#fff"
								/>
							</svg>
							<span className="fancy-link">{siteSettings.email}</span>
						</a>

						<a
							href={`tel:${siteSettings.telefoon}`}
							className="flex items-center mt-2"
						>
							<svg
								className="mr-2"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path
									id="Path_765"
									data-name="Path 765"
									d="M11.128-19.847,6.253-20.972a1.132,1.132,0,0,0-1.289.652l-2.25,5.25a1.122,1.122,0,0,0,.323,1.312l2.841,2.325A17.373,17.373,0,0,1-2.428-3.127L-4.753-5.967a1.124,1.124,0,0,0-1.312-.323l-5.25,2.25a1.139,1.139,0,0,0-.656,1.294l1.125,4.875A1.125,1.125,0,0,0-9.75,3,21.748,21.748,0,0,0,12-18.75,1.124,1.124,0,0,0,11.128-19.847Z"
									transform="translate(12 21)"
									fill="#fff"
								/>
							</svg>
							<span className="fancy-link">{siteSettings.telefoon}</span>
						</a>
					</div>
				</GridWrapper>

				<GridWrapper className="w-full lg:w-10/12">
					<Maps locaties={[siteSettings.locatie]} />
				</GridWrapper>
			</div>
		</main>
	);
}



export const getStaticProps = async () => {
    // const page = await loadSingleSanityContentByType('career');
    const siteSettings = await loadSingleSanityContentByType('siteSettings', null);

    if (!siteSettings) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            siteSettings
        },
    }
}
