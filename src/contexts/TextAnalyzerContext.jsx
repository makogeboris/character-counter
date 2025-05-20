import { createContext, useContext, useState } from "react";

const TextAnalyzerContext = createContext();

function TextAnalyzerProvider({ children }) {
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [charLimit, setCharLimit] = useState(null);
  const [showCharLimit, setShowCharLimit] = useState(false);
  const [showDensity, setShowDensity] = useState(false);
  const [isTextEmpty, setIsTextEmpty] = useState(true);

  function handleChange(e) {
    const newText = e.target.value;
    setText(newText);

    if (!newText.trim()) {
      setShowDensity(false);
    } else {
      setShowDensity(true);
    }

    setIsTextEmpty(!newText.trim());
  }

  function characterCount() {
    return excludeSpaces ? text.replace(/\s/g, "").length : text.length;
  }

  function wordCount() {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  }

  function sentenceCount() {
    return text.trim() === ""
      ? 0
      : text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
  }

  function readingTime() {
    const wordsPerMinute = 200;
    const words = wordCount();
    return (words / wordsPerMinute).toFixed(0);
  }

  function handleCharLimitToggle() {
    setShowCharLimit((prev) => {
      const newValue = !prev;
      setCharLimit(newValue ? 1000 : null);
      return newValue;
    });
  }

  function letterDensity(text) {
    const frequencyMap = {};
    const cleanedText = text.toLowerCase().replace(/[^a-z]/g, "");

    for (let char of cleanedText) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    const totalLetters = cleanedText.length;

    const sorted = Object.entries(frequencyMap)
      .sort((a, b) => b[1] - a[1])
      .map(([letter, count]) => ({
        letter: letter.toUpperCase(),
        count,
        percent: ((count / totalLetters) * 100).toFixed(1),
      }));

    return sorted;
  }

  return (
    <TextAnalyzerContext.Provider
      value={{
        text,
        handleChange,
        charLimit,
        showCharLimit,
        setCharLimit,
        setShowCharLimit,
        handleCharLimitToggle,
        excludeSpaces,
        setExcludeSpaces,
        characterCount,
        wordCount,
        sentenceCount,
        readingTime,
        showDensity,
        isTextEmpty,
        letterDensity,
        setShowDensity,
        setIsTextEmpty,
        wordCount,
        sentenceCount,
      }}
    >
      {children}
    </TextAnalyzerContext.Provider>
  );
}

function useTextAnalyzer() {
  const context = useContext(TextAnalyzerContext);
  if (context === undefined)
    throw new Error(
      "TextAnalyzerContext was used outside of the TextAnalyzerProvider",
    );
  return context;
}

export { TextAnalyzerProvider, useTextAnalyzer };
