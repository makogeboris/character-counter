import Textarea from "./Textarea";
import Options from "./Options";
import Statistics from "./Statistics";
import LetterDensity from "./LetterDensity";

function Main() {
  return (
    <main>
      <div className="mx-auto mb-8 flex w-full max-w-[63.375rem] flex-col items-center gap-8 px-4 sm:mb-24 sm:px-6 md:mb-48">
        <form className="flex w-full flex-col gap-3">
          <Textarea />
          <Options />
        </form>

        <div className="flex w-full flex-col gap-6">
          <Statistics />
          <LetterDensity />
        </div>
      </div>
    </main>
  );
}

export default Main;
