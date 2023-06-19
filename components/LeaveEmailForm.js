import { useState, useRef } from "react";

export default function LeaveEmailForm() {
	const [email, setEmail] = useState("");
	const ref = useRef(null);

	async function submitForm(e) {
		e.preventDefault();
		const response = await fetch("/api/mailchimp", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
			}),
		});
		if (response.status >= 400) {
			alert("Something went wrong, please try again later");
		} else {
			alert("Whitepaper sent! You will receive it within a couple of minutes.");
			ref.current.reset();
		}
	}

	return (
		<form
			ref={ref}
			onSubmit={(e) => submitForm(e)}
			className="w-full max-w-[700px] rounded-full bg-medium-grey border border-border-color-light"
		>
			<input
				onChange={(e) => setEmail(e.target.value)}
				placeholder={"your email"}
				type="text"
				required
				value={email}
				className="bg-medium-grey p-4 rounded-full text-white"
			/>
			<input
				type="submit"
				value="download"
				className="p-4 bg-purple cursor-pointer rounded-full font-trap font-medium"
			/>
		</form>
	);
}
