import GridWrapper from '../../components/Layout/GridWrapper'
import Head from "next/head";
import { loadAllSanityContentByType } from "../../utils/sanity-actions";
import Image from "next/image";
import { SanityClient, urlFor } from '../../sanity-client';
import { useNextSanityImage } from 'next-sanity-image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Gradients from '../../components/Layout/Gradients';
import Moment from 'react-moment';
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import SEO from "../../components/SEO";

export default function PostOverzicht({ posts }) {
	const [filter, setFilter] = useState("all");
	const [postsToShow, setPostsToShow] = useState(posts);
	const router = useRouter();

	useEffect(() => {
		if (router.query.filter) setFilter(router.query.filter);
	}, [router]);

	useEffect(() => {
		setPostsToShow(
			posts.filter((post) => {
				if (filter === "all") return true;
				if (filter === "blog") return post.blog_or_case === false;
				if (filter === "cases") return post.blog_or_case === true;
			})
		);
	}, [filter, setPostsToShow, posts]);

	return (
		<main>
			<SEO
				title={"Blog"}
				description={""}
				image={null}
				slug={"post"}
				siteName={"Function Data"}
			/>

			<div className="relative">
				<GridWrapper>
					<div className="relative flex">
						<div
							style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
							className="mt-36 mb-16 mx-auto backdrop-blur-md shadow-lg inline-block rounded-full border border-white border-opacity-30"
						>
							<button
								className={`rounded-full transition-all px-8 md:px-12 lg:px-24 py-2 md:py-4 text-white lg:text-2xl ${
									filter === "all"
										? "bg-white text-black"
										: "hover:bg-white hover:bg-opacity-10"
								}`}
								onClick={() => setFilter("all")}
							>
								All
							</button>
							<button
								className={` rounded-full transition-all px-8 md:px-12 lg:px-24  py-2 md:py-4 text-white lg:text-2xl ${
									filter === "blog"
										? "bg-white text-black"
										: "hover:bg-white hover:bg-opacity-10"
								}`}
								onClick={() => setFilter("blog")}
							>
								Blog
							</button>
							<button
								className={` rounded-full transition-all px-8 md:px-12 lg:px-24  py-2 md:py-4 text-white lg:text-2xl ${
									filter === "cases"
										? "bg-white text-black"
										: "hover:bg-white hover:bg-opacity-10"
								}`}
								onClick={() => setFilter("cases")}
							>
								Cases
							</button>
						</div>
					</div>
				</GridWrapper>

				<GridWrapper className="gap-8 lg:gap-12 columns-1 sm:columns-2 lg:columns-3 2xl:columns-4">
					{postsToShow.map((post) => (
						<PostCard key={post._id} content={post} />
					))}
				</GridWrapper>
			</div>
		</main>
	);
}

export function PostCard({ content }) {
	const imageProps = useNextSanityImage(SanityClient, content.mainImage);

	return (
		<Link href={"/post/" + content.slug.current}>
			<motion.a
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="group masonryGridItem block relative mb-8"
			>
				<div className="relative rounded-2xl overflow-hidden">
					<div className="transition-transform group-hover:scale-110">
						<Image
							{...imageProps}
							alt={content.title}
							sizes="(max-width: 800px) 100vw, 800px"
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
					<div className="absolute top-4 left-4">
						{content.blog_or_case ? (
							<span className="px-4 py-2 rounded-full bg-red text-white">
								Case
							</span>
						) : (
							<span className="px-4 py-2 rounded-full bg-red text-white">
								Blog
							</span>
						)}
					</div>
				</div>

				<h4 className="mt-4 mb-2 text-grey text-sm">
					{content.client_name ? (
						content.client_name
					) : (
						<Moment format={"D-M-Y"} date={content._createdAt} />
					)}
				</h4>

				<h3 className="text-3xl font-medium block fancy-link">
					{content.title}
				</h3>

				<p className="text-grey mt-2">{content.summary}</p>

				<span className="px-4 py-2  rounded-full text-sm border-white transition-all border-opacity-30 hover:border-opacity-100 border mt-4 inline-block">
					<span className="block transition-all">Read more</span>
				</span>
			</motion.a>
		</Link>
	);
}


export const getStaticProps = async ({ params }) => {
    const posts = await loadAllSanityContentByType('post');

    if (!posts) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            posts,
        },
    }
}

