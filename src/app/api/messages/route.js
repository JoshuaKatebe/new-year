import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const messagesFilePath = path.join(process.cwd(), 'data', 'messages.json');

// Ensure data directory and file exist
function ensureDataFile() {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(messagesFilePath)) {
        fs.writeFileSync(messagesFilePath, JSON.stringify([], null, 2));
    }
}

// GET - Retrieve all messages
export async function GET() {
    try {
        ensureDataFile();
        const data = fs.readFileSync(messagesFilePath, 'utf-8');
        const messages = JSON.parse(data);
        return NextResponse.json(messages);
    } catch (error) {
        console.error('Error reading messages:', error);
        return NextResponse.json([], { status: 500 });
    }
}

// POST - Add a new message
export async function POST(request) {
    try {
        ensureDataFile();
        const { name, message } = await request.json();

        if (!name || !message) {
            return NextResponse.json(
                { error: 'Name and message are required' },
                { status: 400 }
            );
        }

        const data = fs.readFileSync(messagesFilePath, 'utf-8');
        const messages = JSON.parse(data);

        const newMessage = {
            id: Date.now(),
            name: name.trim().slice(0, 50),
            message: message.trim().slice(0, 500),
            timestamp: new Date().toISOString(),
        };

        messages.unshift(newMessage); // Add to beginning

        // Keep only last 100 messages
        const limitedMessages = messages.slice(0, 100);

        fs.writeFileSync(messagesFilePath, JSON.stringify(limitedMessages, null, 2));

        return NextResponse.json(newMessage, { status: 201 });
    } catch (error) {
        console.error('Error saving message:', error);
        return NextResponse.json(
            { error: 'Failed to save message' },
            { status: 500 }
        );
    }
}
