import { useEffect, useState } from "react";

export default function LanguageToggle() {
	const [subdomain, setSubdomain] = useState();

	useEffect(() => {
		if (typeof window !== "undefined") {
			setSubdomain(window.location.host.split(".")[0]);
		}
	}, []);
	return (
		<aside data-wg-notranslate className="relative z-50">
			{subdomain === "nl" && (
				<div
					className="block relative group hover:scale-90 transition-all"
					data-code-language="en"
				>
					<a
						className="w-6 h-6 flex jusitfy-center items-center group-hover:scale-110 transition-all"
						data-wg-notranslate
						href="https://function-data.com"
					>
						<span className="mx-auto">EN</span>
					</a>
				</div>
			)}
			{subdomain !== "nl" && (
				<div
					className="block relative group hover:scale-90 transition-all"
					data-code-language="nl"
				>
					<a
						className="w-6 h-6 text-center flex jusitfy-center items-center group-hover:scale-110 transition-all"
						data-wg-notranslate
						href="https://nl.function-data.com"
					>
						<span className="mx-auto">NL</span>
					</a>
				</div>
			)}
		</aside>
	);
}
