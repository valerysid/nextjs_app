import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import { loadAllContent } from '../../utils/sanity-actions'

export default async function handler(req, res) {

    if (req.method !== "POST") {
        console.error("Must be a POST request")
        return res.status(401).json({ message: "Must be a POST request" })
    }

    const signature = req.headers[SIGNATURE_HEADER_NAME]

    const body = await readBody(req)

    if (!isValidSignature(body, signature, process.env.SANITY_TOKEN)) {
        res.status(401).json({ success: false, message: 'Invalid signature' })
        return
    }

    try {
        const content = JSON.parse(body);
        console.log(content)

        //sitesettings
        if (content.type === 'siteSettings' || content.type === 'partner' || content.type === 'client') {
            const allContent = await loadAllContent()
            await res.revalidate(`/`)
            await res.revalidate(`/contact`)
            await res.revalidate(`/mindset`)
            await res.revalidate(`/our-mindset`)
            await res.revalidate(`/clients-and-partners`)
            await res.revalidate(`/career`)
            await res.revalidate(`/post`)
            await Promise.all(allContent.map(async (item) => {
                await res.revalidate(`/${item.type}/${item.slug}`)
            }))
            return res.json({ message: `Revalidated everything` })
        } else {
            //all other content
            if (content.slug) {
                await res.revalidate(`/career`)
                await res.revalidate(`/post`)
                await res.revalidate(`/${content.type}/${content.slug}`);
            }
            await res.revalidate(`/`)
            return res.json({ message: `Revalidated home` })
        }

    } catch (err) {
        return res.status(500).send({ message: "Error revalidating" })
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
}

async function readBody(readable) {
    const chunks = []
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    }
    return Buffer.concat(chunks).toString('utf8')
}