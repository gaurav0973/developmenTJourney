const GEMINI_API_KEY = "AIzaSyB0WPepCRWgA0_Ha4QQYwn_xD7zqV2yPnE";
const BASE_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export const translateText = async (text, targetLang) => {
  try {
    if (!text || text.trim() === "") {
      return "";
    }

    const prompt = `Translate the following English text to ${targetLang === "hi" ? "Hindi" : "English"}: "${text}"`;

    const response = await fetch(`${BASE_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          topK: 1,
          topP: 1,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Translation API Error:", errorData);
      throw new Error(
        errorData?.error?.message || "Translation request failed"
      );
    }

    const data = await response.json();
    console.log("Gemini Response:", data); // For debugging

    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error("Invalid response format from Gemini API");
    }

    // Extract just the translated text from the response
    const translatedText = data.candidates[0].content.parts[0].text
      .replace(/^["']|["']$/g, "") // Remove quotes if present
      .replace(/^Translation:?\s*/i, "") // Remove "Translation:" prefix if present
      .trim();

    return translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    // Return a more user-friendly error message
    return targetLang === "hi"
      ? "अनुवाद में त्रुटि हुई, कृपया पुनः प्रयास करें"
      : "Translation error, please try again";
  }
};
