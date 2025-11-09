import React, { useState, useEffect } from "react";
import { translateText } from "../services/translateService";
import { languageNames } from "../utils/languages";
import "../utils/speechRecognition";

const SpeechTranslator = () => {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [translations, setTranslations] = useState({
    en: "",
    hi: "",
  });
  const [isTranslating, setIsTranslating] = useState(false);

  // Initialize speech recognition with error handling
  const recognition = React.useMemo(() => {
    try {
      if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        throw new Error("Speech recognition is not supported");
      }
      const recognition = new window.SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false; // Changed to false for more accurate results
      recognition.lang = "en-US";
      recognition.maxAlternatives = 1;
      return recognition;
    } catch (error) {
      console.error("Failed to initialize speech recognition:", error);
      return null;
    }
  }, []);

  useEffect(() => {
    const handleSpeechResult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      setSpokenText(transcript);
      handleTranslation(transcript);
    };

    const handleSpeechError = (event) => {
      console.error("Speech recognition error:", event.error);
      if (event.error === "no-speech") {
        // Handle no speech detected
        setSpokenText("No speech detected. Please try again.");
      }
    };

    recognition.onresult = handleSpeechResult;
    recognition.onerror = handleSpeechError;

    return () => {
      recognition.stop();
      recognition.onresult = null;
      recognition.onerror = null;
    };
  }, [recognition, handleTranslation]);

  const handleTranslation = React.useCallback(async (text) => {
    try {
      setIsTranslating(true);

      // Translate to Hindi
      const hindiText = await translateText(text, "hi");

      setTranslations({
        en: text,
        hi: hindiText,
      });
    } catch (error) {
      console.error("Translation error:", error);
    } finally {
      setIsTranslating(false);
    }
  }, []);

  const toggleListening = () => {
    try {
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
      setIsListening(!isListening);
    } catch (error) {
      console.error("Speech recognition error:", error);
      alert(
        "Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari."
      );
      setIsListening(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Speech Translator</h1>

      {!recognition ? (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg mb-6">
          Speech recognition is not supported in this browser. Please use
          Chrome, Edge, or Safari.
        </div>
      ) : (
        <button
          onClick={toggleListening}
          className={`w-full p-4 mb-6 rounded-lg text-white font-bold ${
            isListening ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>
      )}

      <div className="space-y-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="font-bold mb-2">Spoken Text:</h2>
          <p>{spokenText}</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {Object.entries(translations).map(([lang, text]) => (
            <div key={lang} className="p-4 bg-gray-100 rounded-lg">
              <h2 className="font-bold mb-2">
                {languageNames[lang]}:
                {isTranslating && lang !== "en" && (
                  <span className="ml-2 text-sm text-gray-500">
                    (Translating...)
                  </span>
                )}
              </h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeechTranslator;
