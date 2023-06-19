import { SanityClient } from "../sanity-client"

export async function createDonationInSanity({
    title = 'something went wrong',
    amount = 0,
    gerelateerde_campagne = null,
    voornaam = 'anoniem',
    achternaam = 'anoniem'
}) {
    return await SanityClient.create({
        _id: 'drafts.',
        _type: 'donatie',
        title,
        amount,
        gerelateerde_campagne,
        voornaam,
        achternaam,
    })
}

export async function loadSingleSanityContentByType(type, slug) {
    return await SanityClient.fetch(`
    *[_type == "${type}" && slug.current == $slug][0]{
        ...,
       clients_tweede_blok[]->,
       services_partners[]->
    }`,
        { slug: slug }
    )
}

export async function loadAllCases() {
    return await SanityClient.fetch(`
    *[_type == "post" && blog_or_case == true]{
        ...,
    }`
    )
}

export async function loadAllContent() {
    return await SanityClient.fetch(`
    *[]{
       type,
       'slug':slug.current
    }`
    )
}

export async function loadAllSanityContentByType(type) {
    return await SanityClient.fetch(`
    *[_type == "${type}"]{
        ...,
    }`);
}

export async function loadSanityCampaignByID(ID) {
    return await SanityClient.fetch(`
    *[_id == "${ID}"][0]{
        slug
    }`
    )
}


