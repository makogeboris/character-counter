import { ThemeProvider } from "./contexts/ThemeContext";
import { TextAnalyzerProvider } from "./contexts/TextAnalyzerContext";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider>
      <TextAnalyzerProvider>
        <Header />
        <Main />
      </TextAnalyzerProvider>
    </ThemeProvider>
  );
}

export default App;
