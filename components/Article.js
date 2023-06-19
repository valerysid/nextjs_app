import BlockContent from "./Sanity/BlockContent";
import GridWrapper from './Layout/GridWrapper';
import EducationPartner from "./EducationPartner";
import ApplicationProcess from "./ApplicationProcess";

export default function Article({
	siteSettings,
	content,
	showEducationPartner,
}) {
	return (
		<GridWrapper className="relative flex">
			<div className="w-full md:w-8/12 p-4 mx-auto md:p-16 bg-dark-grey rounded-[40px] border-medium-grey border">
				<BlockContent content={content} />

				{showEducationPartner && (
					<>
						<EducationPartner siteSettings={siteSettings} />
						<ApplicationProcess siteSettings={siteSettings} />
					</>
				)}
			</div>
		</GridWrapper>
	);
}
