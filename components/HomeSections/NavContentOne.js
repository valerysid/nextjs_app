import ThreeDotsBig from './ThreeDotsBig';

export default function NavContentOne({ siteSettings }) {
    return (
			<div className="p-4 lg:p-8 lg:pb-4 border-[#b587be] border-opacity-30 rounded-[24px] lg:rounded-[48px] border backdrop-blur-md">
				<h2 className="text-xl lg:text-3xl mb-2 text-center font-medium font-trap">
					{siteSettings?.navigation_tweede_blok}
				</h2>
				<ThreeDotsBig activeSection={null} />
			</div>
		);
}