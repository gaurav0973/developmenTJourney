// DOM Elements
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const originalText = document.getElementById("originalText");
const frenchText = document.getElementById("frenchText");
const spanishText = document.getElementById("spanishText");

// Speech Recognition Setup
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

// Gemini API Key
const GEMINI_API_KEY = "AIzaSyB0WPepCRWgA0_Ha4QQYwn_xD7zqV2yPnE";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

// Translation function using Gemini API
async function translateText(text, targetLanguage) {
  try {
    const prompt = `Translate the following English text to ${targetLanguage}: "${text}"`;
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
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
      }),
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Translation error:", error);
    return "Translation error occurred";
  }
}

// Event Listeners
startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  recognition.start();
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  recognition.stop();
});

// Speech Recognition Events
recognition.onresult = async (event) => {
  const transcript = Array.from(event.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  // Update original text
  originalText.textContent = transcript;

  // Translate to French and Spanish
  const frenchTranslation = await translateText(transcript, "French");
  const spanishTranslation = await translateText(transcript, "Spanish");

  frenchText.textContent = frenchTranslation;
  spanishText.textContent = spanishTranslation;
};

recognition.onerror = (event) => {
  console.error("Speech recognition error:", event.error);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

// Error handling for browsers that don't support speech recognition
if (
  !("SpeechRecognition" in window) &&
  !("webkitSpeechRecognition" in window)
) {
  alert(
    "Speech recognition is not supported in this browser. Please use Chrome or Edge."
  );
  startBtn.disabled = true;
}
