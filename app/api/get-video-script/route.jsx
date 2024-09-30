import { chatSession } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { prompt } = await req.json();
        const result = await chatSession.sendMessage(prompt);
        console.log(result.response.text())
        return NextResponse.json({ 'result': result.response.text() })
    } catch (error) {
        return NextResponse.json({ 'error': error })
    }

}