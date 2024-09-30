const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
        {
            role: "user",
            parts: [
                { text: "Write a very creative interesting script to generate 30 seconds video on topic: interesting historical story along with Ai image prompt in realistic format for each scene and give me result in JSON format with imagePrompt and contentText as field" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n[\n  {\n    \"imagePrompt\": \"A bustling medieval marketplace, vibrant with color and activity. People in period clothing are haggling over goods, artisans are working at their stalls, and a lone figure in a hooded cloak observes the scene from the edge of the crowd.\",\n    \"contentText\": \"In the heart of 14th century London, whispers of a strange illness spread like wildfire. People began to fall ill, their bodies covered in painful sores, their breath labored and rasping. The Black Death, a terrible plague, had arrived.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up on a face contorted in pain, covered in boils and with sunken eyes. The scene is dimly lit, emphasizing the desperation and fear in the person's expression.\",\n    \"contentText\": \"The plague swept through the city, leaving a trail of death and despair. Homes were deserted, bodies piled high in the streets, and the air was thick with the stench of decay.\"\n  },\n  {\n    \"imagePrompt\": \"A young woman, her face pale and drawn, clutches a small child to her chest. The background shows a desolate cityscape, with empty houses and boarded-up windows.\",\n    \"contentText\": \"Amidst the chaos, a young woman named Agnes, determined to save her child from the plague, sought the help of a wise old healer, a woman rumored to possess ancient knowledge.\" \n  },\n  {\n    \"imagePrompt\": \"A dimly lit room, with flickering candlelight. The old healer, her face etched with lines of wisdom, holds a vial filled with a mysterious liquid, her eyes filled with concern and determination.\",\n    \"contentText\": \"The healer, a woman named Elara, whispered ancient remedies and prepared a potent potion, a last hope against the relentless plague.\" \n  },\n  {\n    \"imagePrompt\": \"A close-up on Agnes' hand as she gently administers the potion to her child. The child's eyes, previously dull and lifeless, begin to sparkle with renewed life.\",\n    \"contentText\": \"The potion, a concoction of herbs and flowers, worked its magic. Agnes’ child recovered, a beacon of hope in a world consumed by darkness.\"\n  }\n]\n```\n\n**Explanation:**\n\nThis JSON structure provides a basic framework for creating a 30-second video about the Black Death. Each object represents a scene, with:\n\n* **imagePrompt:**  This is a detailed description for an AI image generator to create a visually compelling image that supports the scene's narrative.\n* **contentText:** This is the accompanying text for the scene, providing the narration and context.\n\n**Note:**\n\nThis script is a starting point.  You can expand upon it by adding more scenes, detailed character descriptions, sound effects, and music to enhance the storytelling. \n" },
            ],
        },
    ],
});

