import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import NavBar from "./components/NavBar";
import {useState} from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const theme = createTheme({
    palette: {
        background: {
            default: "#7395ae"
        },
        primary: {
            main: "#3b5d75"
        },
        secondary: {
            main: "#5d5c61"
        }
    }
})

function App() {
    const [page, setPage] = useState(0);
    const today = new Date();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <NavBar value={page} setValue={(val) => setPage(val)}/>
                {page === 0 && <AboutMe/>}
                {page === 1 && <Projects/>}
            </Container>
            <footer style={{display: "flex"}}>
                <p style={{margin: "25px auto", fontStyle: "italic"}}>©{today.getFullYear()} Grant Phillips</p>
            </footer>
        </ThemeProvider>
  );
}

export default App;
