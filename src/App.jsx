import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <MainContainer />
    </>
  );
}

export default App;
