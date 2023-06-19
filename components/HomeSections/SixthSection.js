
import TextSection from '../TextSection'
import Curve from '../Layout/Curve';
import { LogoGrid } from '../../pages/clients-and-partners'
import Button from '../Button';
import GridWrapper from '../Layout/GridWrapper';

export default function SixthSection({ siteSettings, clients }) {

    return (
			<section className={`z-10 relative w-full bg-black`}>
				<Curve />

				<TextSection
					color={"yellow"}
					title={siteSettings?.partners_title}
					text={siteSettings?.partners_text}
					highlightedWord={null}
					className={null}
				/>

				<div className="hidden lg:block">
					<LogoGrid
						amount={9}
						gridItems={clients}
						title={null}
						className={"text-yellow"}
					/>
				</div>
				<div className="block lg:hidden">
					<LogoGrid
						amount={5}
						gridItems={clients}
						title={null}
						className={"text-yellow"}
					/>
				</div>

				<GridWrapper className="flex justify-center mt-8">
					<Button href={`/post?filter=cases`} color={"yellow"} size={"large"}>
						Customer Cases
					</Button>
				</GridWrapper>
			</section>
		);
}
