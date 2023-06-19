import { useRouter } from "next/router";

export default function SocialShare({ title }) {
	const router = useRouter();
	const url = router.asPath;

	return (
		<div className="flex">
			<a
				href={`https://twitter.com/share?url=https://function-data.com${url}&text=${title}`}
				className="group hover:scale-90 transition-all "
			>
				<svg
					className="mr-2 border border-white transition-all border-opacity-30 rounded-full group-hover:border-opacity-100"
					id="social-twitter-D"
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 48 48"
				>
					<path
						id="Path_766"
						data-name="Path 766"
						d="M21.533-13.888A10.573,10.573,0,0,0,24-16.431a9.861,9.861,0,0,1-2.832.761,4.906,4.906,0,0,0,2.162-2.711,9.684,9.684,0,0,1-3.122,1.188,4.907,4.907,0,0,0-3.594-1.553A4.917,4.917,0,0,0,11.7-13.827a5.553,5.553,0,0,0,.122,1.127A13.981,13.981,0,0,1,1.675-17.848a4.881,4.881,0,0,0-.67,2.482,4.915,4.915,0,0,0,2.193,4.1,4.953,4.953,0,0,1-2.223-.624v.061A4.919,4.919,0,0,0,4.919-7.005a5.2,5.2,0,0,1-1.294.167A6.2,6.2,0,0,1,2.7-6.914,4.928,4.928,0,0,0,7.294-3.5,9.851,9.851,0,0,1,1.188-1.4,10.18,10.18,0,0,1,0-1.462,13.9,13.9,0,0,0,7.553.746,13.9,13.9,0,0,0,21.548-13.249C21.548-13.462,21.548-13.675,21.533-13.888Z"
						transform="translate(12 33)"
						fill="#fff"
					/>
				</svg>
			</a>

			<a
				href={`https://www.facebook.com/sharer.php?u=https://function-data.com${url}`}
				className="group hover:scale-90 transition-all "
			>
				<svg
					className="mr-2  border border-white   transition-all border-opacity-30 rounded-full group-hover:border-opacity-100"
					id="social-facebook-D"
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 48 48"
				>
					<path
						id="Path_767"
						data-name="Path 767"
						d="M13.085-7.5l.667-4.343H9.584v-2.819a2.172,2.172,0,0,1,2.449-2.347h1.895v-3.7A23.107,23.107,0,0,0,10.564-21c-3.432,0-5.676,2.08-5.676,5.846v3.31H1.073V-7.5H4.888V3h4.7V-7.5Z"
						transform="translate(17 33)"
						fill="#fff"
					/>
				</svg>
			</a>

			<a
				href={`https://www.linkedin.com/shareArticle?url=https://function-data.com${url}&title=${title}`}
				className="group hover:scale-90 transition-all relative"
			>
				<svg
					className="mr-2 transition-all border-opacity-30 border border-white  rounded-full group-hover:border-opacity-100"
					id="social-linkedin-D"
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 48 48"
				>
					<path
						id="Path_768"
						data-name="Path 768"
						d="M3.525,0V-10.515H.26V0ZM1.891-11.95a1.907,1.907,0,0,0,1.891-1.909A1.892,1.892,0,0,0,1.891-15.75,1.892,1.892,0,0,0,0-13.859,1.907,1.907,0,0,0,1.891-11.95ZM15.746,0h0V-5.776c0-2.827-.608-5-3.912-5a3.431,3.431,0,0,0-3.09,1.7H8.7v-1.434H5.571V0H8.833V-5.207c0-1.371.26-2.7,1.958-2.7,1.673,0,1.7,1.564,1.7,2.784V0Z"
						transform="translate(16 31)"
						fill="#fff"
					/>
				</svg>
			</a>
		</div>
	);
}
