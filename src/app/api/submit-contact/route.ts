import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function POST(request: Request) {
    const siteToken = request.headers.get('x-site-token');

    if (siteToken !== process.env.SITE_TOKEN) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { name, email, message } = await request.json();

    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    try {
        await notion.pages.create({
            parent: { database_id: process.env.NOTION_DATABASE_ID },
            properties: {
                Name: { title: [{ text: { content: name } }] },
                Email: { email: email },
                Message: { rich_text: [{ text: { content: message } }] },
            },
        });

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to submit to Notion' }, { status: 500 });
    }
}
