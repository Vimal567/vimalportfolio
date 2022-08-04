import './App.css';
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import Header from './Components/Header';
import Home from './Components/Home';
import SocialIcons from './Components/SocialIcons';
import About from './Components/About';
import Skills from "./Components/Skills"


function App() {

  return (

    <ThemeProvider theme={theme}>
        <div className="pc-device">
          <SocialIcons />
        </div>
        <Header />
        <Home />
        <About />
        <Skills />
    </ThemeProvider >

  );
}

export default App;
