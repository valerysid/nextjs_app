import Link from "next/link";
import GridWrapper from "../Layout/GridWrapper";
import HorizontalLogo from '../LogoHorizontal'
import MenuDesktop from "./MenuDesktop";
import MenuMobile from './MenuMobile'

export default function Header() {

    return (
			<div
				className={`backdrop-blur-md py-2 md:py-4 px-4 md:px-6 z-20 absolute w-full top-0 left-0 right-0 `}
			>
				<header>
					<div className="flex justify-between items-center relative">
						<Link href="/">
							<a className="">
								<HorizontalLogo />
							</a>
						</Link>
						<MenuDesktop />
						<MenuMobile />
					</div>
				</header>
			</div>
		);
}