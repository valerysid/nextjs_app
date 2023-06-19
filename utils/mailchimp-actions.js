import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_SERVER,
});

export async function callPing() {
	const response = await mailchimp.ping.get();
	console.log(response);
}

export async function updateUserInMailchimp(email_list, email) {
	const response = await mailchimp.lists.setListMember(email_list, email, {
		email_address: email,
		status: "subscribed",
	});
	return response;
}

export async function addTagsToUserInMailchimp(email_list, userID, metadata) {
    const tags = {
        tags: [
            {
                name: "Wil nieuwsbrief ontvangen",
                status: metadata.newsletter ? 'active' : 'inactive'
            },
            {
                name: 'Heeft gedoneerd',
                status: 'active',
            },
            {
                name: metadata.donation_type,
                status: 'active',
            },
            {
                name: metadata.campaign_name,
                status: 'active'
            }
        ]
    }
    const response = await mailchimp.lists.updateListMemberTags(email_list, userID, tags);
    return response;
}


