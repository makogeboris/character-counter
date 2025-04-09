import Textarea from "./Textarea";
import Options from "./Options";
import Statistics from "./Statistics";
import LetterDensity from "./LetterDensity";

function MainContainer() {
  return (
    <main>
      <div className="mx-auto mb-8 flex w-full max-w-[61.875rem] flex-col items-center gap-10 px-4 sm:mb-24 sm:gap-12 sm:px-8 md:mb-48">
        <form className="flex w-full flex-col gap-4">
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

export default MainContainer;
