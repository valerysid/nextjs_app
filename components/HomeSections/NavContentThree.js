import ThreeDots from './ThreeDots';

export default function NavContentThree({ siteSettings, activeSection }) {

    return (
			<div className="p-0 lg:p-8 lg:pb-0 border lg:border-none border-border-color-light rounded-[24px] backdrop-blur-md">
				<ThreeDots activeSection={activeSection} />
				<h2 className="text-lg pt-2 lg:pt-0 lg:text-2xl font-medium text-center font-trap pb-2 lg:pb-0">
					{siteSettings?.services_navigation_title}
				</h2>
			</div>
		);
}