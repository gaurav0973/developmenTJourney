import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");

  const handleSpeak = async () => {
    try {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = "en-US";
      recognition.onresult = async (event) => {
        const spokenText = event.results[0][0].transcript;
        setText(spokenText);

        // Translate the text
        try {
          const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB0WPepCRWgA0_Ha4QQYwn_xD7zqV2yPnE",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                      {
                        text: `Translate to Hindi: ${spokenText}`,
                      },
                    ],
                  },
                ],
              }),
            }
          );

          const data = await response.json();
          setTranslation(data.candidates[0].content.parts[0].text);
        } catch (error) {
          console.error("Translation error:", error);
          setTranslation("Translation failed");
        }
      };

      recognition.start();
    } catch (error) {
      console.error("Speech recognition error:", error);
      setText("Speech recognition not supported");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Speech Translator
      </h1>

      <button
        onClick={handleSpeak}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Start Speaking
      </button>

      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderRadius: "5px",
        }}
      >
        <h3>You said:</h3>
        <p>{text || "Click the button and start speaking..."}</p>
      </div>

      <div
        style={{
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderRadius: "5px",
        }}
      >
        <h3>Hindi Translation:</h3>
        <p>{translation || "Translation will appear here..."}</p>
      </div>
    </div>
  );
}

export default App;
