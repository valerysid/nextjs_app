import Head from 'next/head'
import { loadSingleSanityContentByType, loadAllSanityContentByType } from '../utils/sanity-actions'
import GridWrapper from '../components/Layout/GridWrapper'
import { urlFor } from '../sanity-client'
import Image from 'next/image'
import Button from '../components/Button'
import SEO from "../components/SEO";
export default function Contact({ siteSettings, partners, clients }) {
	return (
		<main className="relative pt-36">
			<SEO
				title={"Clients and partners"}
				description={"A grasp of technologies we work with"}
				image={null}
				slug={"clients-and-partners"}
				siteName={siteSettings.meta_title}
			/>

			<GridWrapper className={"relative text-center py-36"}>
				<h1 className="text-6xl lg:text-8xl font-medium max-w-2xl mx-auto text-white ">
					Clients and partners
				</h1>
			</GridWrapper>

			<LogoGrid
				gridItems={partners}
				title={"A grasp of technologies we work with"}
				className={"text-green"}
			/>

			<LogoGrid
				gridItems={clients}
				title={"Our clients"}
				className={"text-yellow"}
			/>

			<GridWrapper className="flex justify-center mt-8">
				<Button href={`/post?filter=cases`} color={"yellow"} size={"large"}>
					Customer Cases
				</Button>
			</GridWrapper>
		</main>
	);
}

export function LogoGrid({ amount = 100, gridItems, title, className }) {
    return (
			<GridWrapper>
				<div className={`lg:mt-16 text-center ${className}`}>
					{title && <h2 className="text-sm lg:text-2xl mb-4 block">{title}</h2>}
				</div>
				<div className="flex flex-wrap max-w-6xl mx-auto justify-center">
					{gridItems?.slice(0, amount).map((partner) => {
						return (
							<div
								key={partner._id}
								className="bg-white m-2 w-24 px-1 py-1 sm:w-36 lg:w-48 flex items-center relative rounded-full md:px-3 md:py-2 lg:m-4 lg:px-6 lg:py-4"
							>
								<Image
									alt={partner.title}
									width={280}
									height={72}
									src={urlFor(partner.mainImage).width(280).height(72).url()}
								/>
							</div>
						);
					})}
				</div>
			</GridWrapper>
		);
}

export const getStaticProps = async () => {
    // const page = await loadSingleSanityContentByType('career');
    const siteSettings = await loadSingleSanityContentByType('siteSettings', null);
    const partners = await loadAllSanityContentByType('partner', null);
    const clients = await loadAllSanityContentByType('client', null);

    if (!siteSettings) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            siteSettings,
            partners,
            clients
        },
    }
}
  