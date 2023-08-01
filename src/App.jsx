import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import StopWatch from "./pages/StopWatch";
import Timer from "./pages/Timer";
import ClicksCounter from "./pages/ClicksCounter";
import CounterAnimation from "./pages/CounterAnimation";
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
				<StopWatch />
				<Timer />
				<ClicksCounter />
				<CounterAnimation />
			</div>
		</ThemeProvider>
	);
}

export default App;
