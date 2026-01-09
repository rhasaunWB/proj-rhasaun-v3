import { Client } from '@notionhq/client';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;
    const siteToken = req.headers['x-site-token'];

    if (siteToken !== process.env.SITE_TOKEN) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        return res.status(500).json({ message: 'Server configuration error' });
    }

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    try {
        await notion.pages.create({
            parent: { database_id: process.env.NOTION_DATABASE_ID },
            properties: {
                Name: { title: [{ text: { content: name } }] },
                Email: { email: email },
                Message: { rich_text: [{ text: { content: message } }] },
                // 'Submitted At': { date: { start: new Date().toISOString() } },
            },
        });

        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to submit to Notion' });
    }
}
