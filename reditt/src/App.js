import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./constants/Theme";
import Login from "./pages/login/Login";
import Post from "./pages/post/Post";
import { Router } from "./Routes/Router";

function App() {
  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
