import GridWrapper from '../../components/Layout/GridWrapper'
import Head from "next/head";
import { loadAllSanityContentByType, loadSingleSanityContentByType } from "../../utils/sanity-actions";
import Image from "next/image";
import Article from '../../components/Article'
import Gradients from '../../components/Layout/Gradients';
import { urlFor } from '../../sanity-client';
import SEO from "../../components/SEO";

export default function Career({ page }) {
	return (
		<main>
			<SEO
				title={page.title}
				description={page.korte_samenvatting}
				image={urlFor(page.mainImage).width(800).height(600).url()}
				slug={"post/" + page.slug.current}
				siteName={"Fuction Data"}
			/>

			<div className="relative md:pt-36">
				<GridWrapper
					className={
						"pt-36 flex flex-wrap items-center justify-center relative"
					}
				>
					<div className="w-full md:w-5/12">
						<div className="relative rounded-[24px] overflow-hidden">
							<Image
								width={1000}
								height={600}
								alt="ik ben een alt tekst"
								layout={"responsive"}
								src={urlFor(page.mainImage).width(1000).height(600).url()}
							/>
						</div>
					</div>

					<div className="w-full md:w-5/12 p-4 md:pl-8 lg:p-12 xl:pl-16">
						{page.blog_or_case ? (
							<span className="px-4 py-2 rounded-full bg-red text-white">
								Case
							</span>
						) : (
							<span className="px-4 py-2 rounded-full bg-red text-white">
								Blog
							</span>
						)}
						<aside className="inline-block ml-4">{page.location}</aside>
						<h1 className="text-3xl lg:text-4xl mt-4">{page?.title}</h1>
						<p className="text-xl lg:text-2xl mt-4">
							{page?.korte_samenvatting}
						</p>
					</div>
				</GridWrapper>

				<Article content={page?.body} />
			</div>
		</main>
	);
}


export const getStaticProps = async ({ params }) => {

    const slug = params.slug;
    const page = await loadSingleSanityContentByType('post', slug);

    if (!page) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            page,
        },
    }
}


export const getStaticPaths = async () => {
    const data = await loadAllSanityContentByType('post');

    return {
        paths: data.map((pageData) => ({ params: { slug: pageData.slug.current } })),
        fallback: "blocking",
    };
};