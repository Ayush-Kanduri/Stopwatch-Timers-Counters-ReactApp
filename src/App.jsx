import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { useEffect } from "react";
import StopWatch from "./pages/StopWatch";
import Timer from "./pages/Timer";
import ClicksCounter from "./pages/ClicksCounter";
import CounterAnimation from "./pages/CounterAnimation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";

const theme = {
	color: {
		heading: "var(--primary)",
		elements: "var(--tertiary)",
		text: "var(--secondary)",
	},
};

function App() {
	useEffect(() => {
		toast("Don't forget to Scroll Down 👇");
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div className="app">
				<Toast />
				<StopWatch />
				<Timer />
				<ClicksCounter />
				<CounterAnimation />
			</div>
		</ThemeProvider>
	);
}

export default App;

const Toast = () => {
	return (
		<ToastContainer
			position="top-right"
			autoClose={5000}
			limit={1}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
		/>
	);
};
