import OpenAI from 'openai';

// Initialize OpenAI client using environment variable
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Create OpenAI instance only if API key is available
const openai = apiKey ? new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true // Required for client-side usage
}) : null;

export const generateResponse = async (message: string) => {
  try {
    if (!openai) {
      return "Chat support requires an OpenAI API key. Please configure it in your environment variables.";
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a supportive and empathetic assistant helping someone with addiction recovery. Provide encouraging, non-judgmental responses."
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 800
    });

    return response.choices[0]?.message?.content || "I'm here to support you.";
  } catch (error) {
    console.error('Error generating response:', error);
    return "I'm having trouble responding right now, but I'm here to support you.";
  }
}