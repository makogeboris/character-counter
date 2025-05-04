import { useState } from "react";
import Textarea from "./Textarea";
import Options from "./Options";
import Statistics from "./Statistics";
import LetterDensity from "./LetterDensity";

function MainContainer() {
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
    <main>
      <div className="mx-auto mb-8 flex w-full max-w-[61.875rem] flex-col items-center gap-8 px-4 sm:mb-24 sm:px-6 md:mb-48">
        <form className="flex w-full flex-col gap-4">
          <Textarea
            text={text}
            handleChange={handleChange}
            charLimit={charLimit}
            characterCount={characterCount()}
            showCharLimit={showCharLimit}
          />
          <Options
            charLimit={charLimit}
            setCharLimit={setCharLimit}
            showCharLimit={showCharLimit}
            setShowCharLimit={setShowCharLimit}
            handleCharLimitToggle={handleCharLimitToggle}
            excludeSpaces={excludeSpaces}
            setExcludeSpaces={setExcludeSpaces}
            readingTime={readingTime()}
            text={text}
          />
        </form>

        <div className="flex w-full flex-col gap-6">
          <Statistics
            characters={characterCount()}
            words={wordCount()}
            sentence={sentenceCount()}
            excludeSpaces={excludeSpaces}
          />
          <LetterDensity
            showDensity={showDensity}
            isTextEmpty={isTextEmpty}
            density={letterDensity(text)}
          />
        </div>
      </div>
    </main>
  );
}

export default MainContainer;
