import '../tailwind.css'
import Layout from '../components/Layout/Layout'
import { UserAuthContextProvider } from "../context/UserAuthContext";
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script'
import Head from 'next/head';
import {VirtualPageView} from '../components/GTM/Pageview';
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const mainDataLayer = {
			pageTypeName: pageProps.page || null,
			url: router.pathname,
		};

		VirtualPageView(mainDataLayer);
	}, [pageProps]);

	return (
		<UserAuthContextProvider>
			<Script
				src="https://cdn.weglot.com/weglot.min.js"
				onLoad={() => {
					Weglot.initialize({
						api_key: "wg_4d3a6ebee16d17a74cf6f4b0ec3c36929",
					});
				}}
			/>

			<Head>
				<link
					rel="alternate"
					hrefLang="en"
					href="https://www.function-data.com"
				/>
				<link
					rel="alternate"
					hrefLang="nl"
					href="https://nl.function-data.com"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Script id="google-tag-manager" strategy="afterInteractive">
				{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KPR5KZF');
          `}
			</Script>

			<Layout>
				<AnimatePresence
					mode="wait"
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}
				>
					<motion.div
						initial={{ x: 0, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 0, opacity: 0 }}
						key={router.asPath}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						<DefaultSeo
							openGraph={{
								type: "website",
								locale: "en_IE",
								url: "https://www.function-data.com/",
								siteName: "Function Data",
							}}
						/>
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</Layout>
		</UserAuthContextProvider>
	);
}

export default MyApp