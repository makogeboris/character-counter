import { useTextAnalyzer } from "../contexts/TextAnalyzerContext";

function Statistics() {
  const { characterCount, wordCount, sentenceCount, excludeSpaces } =
    useTextAnalyzer();
  const characters = characterCount();
  const words = wordCount();
  const sentence = sentenceCount();

  const formatStat = (value) =>
    value !== undefined ? value.toString().padStart(2, "0") : "00";

  return (
    <div className="flex w-full flex-col gap-4 sm:flex-row">
      <div className="character w-full rounded-xl bg-purple-400 px-5 py-7 sm:px-3 sm:py-6 md:px-4 md:py-7">
        <div className="flex flex-col items-start">
          <p className="stats text-5xl font-bold tracking-tighter sm:text-7xl">
            {formatStat(characters)}
          </p>
          <p className="stats text-xl font-normal tracking-tighter">
            Total Characters {excludeSpaces && "(no space)"}
          </p>
        </div>
      </div>

      <div className="word w-full rounded-xl bg-yellow-500 px-5 py-7 sm:px-3 sm:py-6 md:px-4 md:py-7">
        <div className="flex flex-col items-start">
          <p className="stats text-5xl font-bold tracking-tighter sm:text-7xl">
            {formatStat(words)}
          </p>
          <p className="stats text-xl font-normal tracking-tighter">
            Word Count
          </p>
        </div>
      </div>

      <div className="sentence orange w-full rounded-xl px-5 py-7 sm:px-3 sm:py-6 md:px-4 md:py-7">
        <div className="flex flex-col items-start">
          <p className="stats text-5xl font-bold tracking-tighter sm:text-7xl">
            {formatStat(sentence)}
          </p>
          <p className="stats text-xl font-normal tracking-tighter">
            Sentence Count
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
