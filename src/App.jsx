import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import StopWatch from "./pages/StopWatch";
import Timer from "./pages/Timer";
import "./styles/App.css";

const theme = {
	color: {
		heading: "var(--primary)",
		elements: "var(--tertiary)",
		text: "var(--secondary)",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div className="app">
				{/* <StopWatch /> */}
				<Timer />
			</div>
		</ThemeProvider>
	);
}

export default App;
