import GridWrapper from "../Layout/GridWrapper";
import Image from "next/image";
import Star from "../Star";
import Button from "../Button";
import Link from "next/link";

export default function Footer() {

    return (
			<footer className="relative overflow-hidden pt-16 mt-16">
				<Image
					src={"/gradient-footer.jpg"}
					alt="a colorful gradient"
					layout={"fill"}
				/>

				<GridWrapper
					className={"flex flex-wrap md:flex-nowrap relative items-center"}
				>
					<div className="md:order-2 z-10 p-4 md:pl-16 flex-1 text-center md:text-left">
						<h2 className="text-4xl  md:text-8xl">Get in touch</h2>

						<div className="mt-8 md:mt-0 flex w-full flex-wrap md:flex-nowrap">
							<div className="w-full md:w-1/2">
								<h3 className="text-2xl mt-8">Wanna work with Function?</h3>
								<Button
									href={"mailto:contact@function-data.com"}
									className={"mt-4"}
								>
									Contact us
								</Button>
							</div>

							<div className="w-full md:w-1/2">
								<h3 className="text-2xl mt-8">
									Function is hiring. Join our team!
								</h3>
								<Button href={"/career"} className={"mt-4"}>
									Explore our careers
								</Button>
							</div>
						</div>
					</div>

					<div className=" w-full md:w-2/12 z-10 rotate-[30deg]">
						<Star
							className={"mt-8 md:mt-0 max-w-[140px] mx-auto md:w-full md:mx-0"}
						/>
					</div>
				</GridWrapper>

				<GridWrapper
					className={
						"flex flex-wrap md:flex-nowrap relative z-10 justify-between items-center mt-16"
					}
				>
					<div>
						<aside>2023 © Function</aside>
					</div>

					<div>
						<Link href={"#"}>Privacy Policy</Link>
						<span> • </span>
						<Link href={"#"}>Terms and Conditions</Link>
					</div>

					<div>Made by Studio van der Burgt</div>
				</GridWrapper>
			</footer>
		);
}