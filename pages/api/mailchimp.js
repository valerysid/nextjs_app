import { updateUserInMailchimp, callPing } from "../../utils/mailchimp-actions";

export default async (req, res) => {
	const { email } = req.body;

	if (!email) {
		return res.status(400).json({ error: "Email is required" });
	}

	try {
		const AUDIENCE_ID = "540424f01d";
		const response = updateUserInMailchimp(AUDIENCE_ID, email);

		if (response.status >= 400) {
			return res.status(400).json({
				error: `There was an error subscribing to the newsletter.
              Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
			});
		}

		return res.status(201).json({ error: "" });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};
