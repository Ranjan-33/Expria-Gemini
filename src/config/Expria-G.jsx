import { GoogleGenerativeAI } from "@google/generative-ai";

// Use the environment variable with the REACT_APP_ prefix
const apiKey = import.meta.env.VITE_API_KEY;

if (!apiKey) {
  throw new Error("API key for Google Generative AI is missing!");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [], // Keep an empty history initially
  });

  const result = await chatSession.sendMessage(prompt);
  // console.log(result.response.text());
  return result.response.text();
}

export default run;
