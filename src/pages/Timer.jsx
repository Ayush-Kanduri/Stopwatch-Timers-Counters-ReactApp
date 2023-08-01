/* eslint-disable react/prop-types */
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import AlertComponent from "@/components/AlertComponent";
import Box from "@/components/Box";
import ButtonOne from "@/components/ButtonOne";
import ButtonTwo from "@/components/ButtonTwo";
import Text from "@/components/Text";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

function LaunchConfetti() {
	confetti({
		particleCount: 250,
		spread: 250,
	});
	confetti({
		particleCount: 250,
		spread: 250,
	});
	confetti({
		particleCount: 250,
		spread: 250,
	});
	confetti({
		particleCount: 250,
		spread: 250,
		origin: { x: 0 },
	});
	confetti({
		particleCount: 250,
		spread: 250,
		origin: { x: 1 },
	});
	confetti({
		particleCount: 250,
		spread: 250,
		origin: { x: 0 },
	});
	confetti({
		particleCount: 250,
		spread: 250,
		origin: { x: 1 },
	});
}

const useInput = (initialState) => {
	const [value, setValue] = useState(initialState);
	const handleInput = (e) => setValue(e.target.value);
	const resetInput = () => setValue("");
	return { value, onChange: handleInput, resetInput };
};

const Timer = () => {
	const input = useInput("");
	const intervalRef = useRef(0);
	const [count, setCount] = useState(0);
	const [alert, setAlert] = useState({ status: false, severity: "error" });
	const [active, setActive] = useState(false);
	const digit1Ref = useRef(null);
	const digit2Ref = useRef(null);
	const digit3Ref = useRef(null);
	const digit4Ref = useRef(null);
	const digit5Ref = useRef(null);
	const [digitOne, setDigitOne] = useState(0);
	const [digitOnePush, setDigitOnePush] = useState(false);
	const [digitTwo, setDigitTwo] = useState(0);
	const [digitTwoPush, setDigitTwoPush] = useState(false);
	const [digitThree, setDigitThree] = useState(0);
	const [digitThreePush, setDigitThreePush] = useState(false);
	const [digitFour, setDigitFour] = useState(0);
	const [digitFourPush, setDigitFourPush] = useState(false);
	const [digitFive, setDigitFive] = useState(0);
	const [digitFivePush, setDigitFivePush] = useState(false);

	useEffect(() => {
		if (active) {
			intervalRef.current = setInterval(() => {
				setCount((prev) => {
					let DIGIT = prev.toString().split("");
					let digitLength = DIGIT.length;
					switch (digitLength) {
						case 1:
							setDigitOne(0);
							setDigitOnePush(false);
							setDigitTwo(0);
							setDigitTwoPush(false);
							setDigitThree(0);
							setDigitThreePush(false);
							if (digit4Ref.current.textContent !== "0") {
								setDigitFour(0);
								setDigitFourPush(true);
							} else {
								setDigitFourPush(false);
							}
							setDigitFive(parseInt(DIGIT[0]));
							setDigitFivePush(true);
							digit1Ref.current.textContent = "0";
							digit2Ref.current.textContent = "0";
							digit3Ref.current.textContent = "0";
							break;
						case 2:
							setDigitOne(0);
							setDigitOnePush(false);
							setDigitTwo(0);
							setDigitTwoPush(false);
							if (digit3Ref.current.textContent !== "0") {
								setDigitThree(0);
								setDigitThreePush(true);
							} else {
								setDigitThreePush(false);
							}
							if (digit4Ref.current.textContent !== DIGIT[0]) {
								setDigitFour(parseInt(DIGIT[0]));
								setDigitFourPush(true);
							} else {
								setDigitFourPush(false);
							}
							setDigitFive(parseInt(DIGIT[1]));
							setDigitFivePush(true);
							digit1Ref.current.textContent = "0";
							digit2Ref.current.textContent = "0";
							break;
						case 3:
							setDigitOne(0);
							setDigitOnePush(false);
							if (digit2Ref.current.textContent !== "0") {
								setDigitTwo(0);
								setDigitTwoPush(true);
							} else {
								setDigitTwoPush(false);
							}
							if (digit3Ref.current.textContent !== DIGIT[0]) {
								setDigitThree(DIGIT[0]);
								setDigitThreePush(true);
							} else {
								setDigitThreePush(false);
							}
							if (digit4Ref.current.textContent !== DIGIT[1]) {
								setDigitFour(parseInt(DIGIT[1]));
								setDigitFourPush(true);
							} else {
								setDigitFourPush(false);
							}
							setDigitFive(parseInt(DIGIT[2]));
							setDigitFivePush(true);
							digit1Ref.current.textContent = "0";
							break;
						case 4:
							if (digit1Ref.current.textContent !== "0") {
								setDigitOne(0);
								setDigitOnePush(true);
							} else {
								setDigitOnePush(false);
							}
							if (digit2Ref.current.textContent !== DIGIT[0]) {
								setDigitTwo(DIGIT[0]);
								setDigitTwoPush(true);
							} else {
								setDigitTwoPush(false);
							}
							if (digit3Ref.current.textContent !== DIGIT[1]) {
								setDigitThree(DIGIT[1]);
								setDigitThreePush(true);
							} else {
								setDigitThreePush(false);
							}
							if (digit4Ref.current.textContent !== DIGIT[2]) {
								setDigitFour(parseInt(DIGIT[2]));
								setDigitFourPush(true);
							} else {
								setDigitFourPush(false);
							}
							setDigitFive(parseInt(DIGIT[3]));
							setDigitFivePush(true);
							break;
						case 5:
							if (digit1Ref.current.textContent !== DIGIT[0]) {
								setDigitOne(DIGIT[0]);
								setDigitOnePush(true);
							} else {
								setDigitOnePush(false);
							}
							if (digit2Ref.current.textContent !== DIGIT[1]) {
								setDigitTwo(DIGIT[1]);
								setDigitTwoPush(true);
							} else {
								setDigitTwoPush(false);
							}
							if (digit3Ref.current.textContent !== DIGIT[2]) {
								setDigitThree(DIGIT[2]);
								setDigitThreePush(true);
							} else {
								setDigitThreePush(false);
							}
							if (digit4Ref.current.textContent !== DIGIT[3]) {
								setDigitFour(parseInt(DIGIT[3]));
								setDigitFourPush(true);
							} else {
								setDigitFourPush(false);
							}
							setDigitFive(parseInt(DIGIT[4]));
							setDigitFivePush(true);
							break;
						default:
							setDigitOne(0);
							setDigitOnePush(false);
							setDigitTwo(0);
							setDigitTwoPush(false);
							setDigitThree(0);
							setDigitThreePush(false);
							setDigitFour(0);
							setDigitFourPush(false);
							setDigitFive(0);
							setDigitFivePush(false);
					}
					if (prev === 0) {
						clearInterval(intervalRef.current);
						setDigitOne(0);
						setDigitOnePush(false);
						setDigitTwo(0);
						setDigitTwoPush(false);
						setDigitThree(0);
						setDigitThreePush(false);
						setDigitFour(0);
						setDigitFourPush(false);
						digit1Ref.current.textContent = "0";
						digit2Ref.current.textContent = "0";
						digit3Ref.current.textContent = "0";
						digit4Ref.current.textContent = "0";
						setTimeout(() => {
							LaunchConfetti();
							setAlert({ status: true, severity: "success" });
							setActive(false);
							input.resetInput();
						}, 1000);
						return prev;
					}
					return prev - 1;
				});
			}, 1000);
		} else {
			clearInterval(intervalRef.current);
		}
		return () => clearInterval(intervalRef.current);
	}, [active, input]);

	useEffect(() => {
		if (alert.status) {
			setTimeout(() => setAlert((prev) => ({ ...prev, status: false })), 3000);
		}
	}, [alert.status]);

	const startTimer = () => {
		let { value } = input;
		if (value > 0 && value <= 99999) {
			let digit = value.toString().split("");
			let digitLength = digit.length;
			if (digitLength === 1) {
				digit5Ref.current.textContent = digit[0];
			} else if (digitLength === 2) {
				digit4Ref.current.textContent = digit[0];
				digit5Ref.current.textContent = digit[1];
			}
			if (digitLength === 3) {
				digit3Ref.current.textContent = digit[0];
				digit4Ref.current.textContent = digit[1];
				digit5Ref.current.textContent = digit[2];
			}
			if (digitLength === 4) {
				digit2Ref.current.textContent = digit[0];
				digit3Ref.current.textContent = digit[1];
				digit4Ref.current.textContent = digit[2];
				digit5Ref.current.textContent = digit[3];
			}
			if (digitLength === 5) {
				digit1Ref.current.textContent = digit[0];
				digit2Ref.current.textContent = digit[1];
				digit3Ref.current.textContent = digit[2];
				digit4Ref.current.textContent = digit[3];
				digit5Ref.current.textContent = digit[4];
			}
			setCount(value - 1);
			setActive(true);
		} else {
			setAlert({ status: true, severity: "error" });
		}
	};

	const resetTimer = () => {
		clearInterval(intervalRef.current);
		setCount(0);
		input.resetInput();
		setActive(false);
		setDigitOne(0);
		setDigitOnePush(false);
		setDigitTwo(0);
		setDigitTwoPush(false);
		setDigitThree(0);
		setDigitThreePush(false);
		setDigitFour(0);
		setDigitFourPush(false);
		setDigitFive(0);
		setDigitFivePush(false);
		digit1Ref.current.textContent = "0";
		digit2Ref.current.textContent = "0";
		digit3Ref.current.textContent = "0";
		digit4Ref.current.textContent = "0";
		digit5Ref.current.textContent = "0";
		setAlert({ status: false, severity: "error" });
	};

	return (
		<Container className="scroll">
			<AnimatePresence>
				{alert.status && (
					<AlertComponent
						setAlert={setAlert}
						severity={alert.severity}
						message={
							alert.severity === "error"
								? "Please enter a valid number from 1 - 99999 🙏"
								: "Time's up! Timer has been completed ✨"
						}
					/>
				)}
			</AnimatePresence>
			<Stack direction="column" spacing={5} sx={{ position: "relative" }}>
				<Heading>Timer</Heading>
				<Stack direction="row" spacing={1}>
					<Box
						digit={digitOne}
						digitRef={digit1Ref}
						setPush={setDigitOnePush}
						push={digitOnePush}
					/>
					<Box
						digit={digitTwo}
						digitRef={digit2Ref}
						setPush={setDigitTwoPush}
						push={digitTwoPush}
					/>
					<Box
						digit={digitThree}
						digitRef={digit3Ref}
						setPush={setDigitThreePush}
						push={digitThreePush}
					/>
					<Box
						digit={digitFour}
						digitRef={digit4Ref}
						setPush={setDigitFourPush}
						push={digitFourPush}
					/>
					<Box
						digit={digitFive}
						digitRef={digit5Ref}
						setPush={setDigitFivePush}
						push={digitFivePush}
					/>
				</Stack>
				<Stack direction="column" spacing={1}>
					<Text input={input} active={active} count={count} />
					<ButtonOne start={startTimer} active={active} count={count} />
					<ButtonTwo reset={resetTimer} active={active} input={input} />
				</Stack>
			</Stack>
		</Container>
	);
};

export default Timer;

const Heading = styled.h1`
	font-size: 3rem;
	color: ${({ theme }) => theme.color.text};
	text-align: center;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	overflow: hidden;
	position: relative;
`;
