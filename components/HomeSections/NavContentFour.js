import ThreeDots from './ThreeDots';

export default function NavContentFour({ siteSettings, activeSection }) {
    return (
			<div className="p-0 lg:p-8 lg:pb-0 border-border-color-light border lg:border-none rounded-[24px] backdrop-blur-md">
				<ThreeDots activeSection={activeSection} />
				<h2 className="text-lg p-2 lg:p-0 lg:text-2xl font-medium text-center font-trap">
					{siteSettings?.team_nav_title}
				</h2>
			</div>
		);
}