import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
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
	const [alert, setAlert] = useState({
		status: false,
		severity: "error",
		message: "Please enter a valid number from 1 - 99999 🙏",
	});
	const [digitOne, setDigitOne] = useState(0);
	const [digitTwo, setDigitTwo] = useState(0);
	const [digitThree, setDigitThree] = useState(0);
	const [digitFour, setDigitFour] = useState(0);
	const [digitFive, setDigitFive] = useState(0);
	const [active, setActive] = useState(false);

	useEffect(() => {
		// FIX:: wrong confetti message the end of the timer
		if (active) {
			intervalRef.current = setInterval(() => {
				setCount((prev) => {
					if (prev === 0) {
						LaunchConfetti();
						setAlert((prev) => ({
							...prev,
							status: true,
							severity: "success",
							message: "Time's up! Timer has been completed 🎊✨",
						}));
						clearInterval(intervalRef.current);
						setCount(0);
						input.resetInput();
						setDigitOne(0);
						setDigitTwo(0);
						setDigitThree(0);
						setDigitFour(0);
						setDigitFive(0);
						setActive(false);
						return;
					}
					let digit = [...prev.toString().split("")].reverse();
					let digitLength = digit.length;
					switch (digitLength) {
						case 1:
							setDigitOne(digit[0]);
							setDigitTwo(0);
							setDigitThree(0);
							setDigitFour(0);
							setDigitFive(0);
							break;
						case 2:
							setDigitOne(digit[0]);
							setDigitTwo(digit[1]);
							setDigitThree(0);
							setDigitFour(0);
							setDigitFive(0);
							break;
						case 3:
							setDigitOne(digit[0]);
							setDigitTwo(digit[1]);
							setDigitThree(digit[2]);
							setDigitFour(0);
							setDigitFive(0);
							break;
						case 4:
							setDigitOne(digit[0]);
							setDigitTwo(digit[1]);
							setDigitThree(digit[2]);
							setDigitFour(digit[3]);
							setDigitFive(0);
							break;
						case 5:
							setDigitOne(digit[0]);
							setDigitTwo(digit[1]);
							setDigitThree(digit[2]);
							setDigitFour(digit[3]);
							setDigitFive(digit[4]);
							break;
						default:
							setDigitOne(0);
							setDigitTwo(0);
							setDigitThree(0);
							setDigitFour(0);
							setDigitFive(0);
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
		value > 0 && value <= 99999
			? (setActive(true), setCount(value))
			: setAlert((prev) => {
					return {
						...prev,
						status: true,
						severity: "error",
						message: "Please enter a valid number from 1 - 99999 🙏",
					};
			  });
	};

	const resetTimer = () => {
		clearInterval(intervalRef.current);
		setCount(0);
		input.resetInput();
		setActive(false);
		setDigitOne(0);
		setDigitTwo(0);
		setDigitThree(0);
		setDigitFour(0);
		setDigitFive(0);
		setAlert((prev) => ({
			...prev,
			status: false,
			severity: "error",
			message: "Please enter a valid number from 1 - 99999 🙏",
		}));
	};

	return (
		<>
			{/* {console.log(digitFive, digitFour, digitThree, digitTwo, digitOne)} */}
			<AnimatePresence>
				{alert.status && (
					<AlertComponent setAlert={setAlert} severity={alert.severity} />
				)}
			</AnimatePresence>
			<Stack direction="column" spacing={5} sx={{ position: "relative" }}>
				<Heading>Timer</Heading>
				<Stack direction="row" spacing={1}>
					{<Box digit={digitFive} />}
					<Box digit={digitFour} />
					<Box digit={digitThree} />
					<Box digit={digitTwo} />
					{digitOne == "0" ? (
						<Box digit={digitOne} />
					) : (
						<Box
							digit={digitOne}
							from={150}
							repeat={Infinity}
							repeatType="loop"
						/>
					)}
				</Stack>
				<Stack direction="column" spacing={1}>
					<Input
						id="outlined-number"
						label="Number"
						type="number"
						value={input.value}
						onChange={input.onChange}
						disabled={active && count >= 0}
					/>
					<StyledButton
						size="large"
						sx={{ color: "black", width: "100%" }}
						variant="contained"
						startIcon={<AlarmIcon />}
						onClick={startTimer}
						disabled={active && count >= 0}
					>
						Start
					</StyledButton>
					<StyledButton2
						size="large"
						sx={{ width: "100%" }}
						variant="outlined"
						startIcon={<DeleteIcon />}
						color="error"
						onClick={resetTimer}
						disabled={!active && input.value === ""}
					>
						Reset
					</StyledButton2>
				</Stack>
			</Stack>
		</>
	);
};

export default Timer;

const AlertComponent = ({ setAlert, severity }) => {
	return (
		<AlertMotion
			key="alert"
			initial={{ x: 500, opacity: 0, scale: 0.2 }}
			animate={{
				x: 0,
				opacity: 1,
				scale: 1,
				transition: { type: "spring", stiffness: 200 },
			}}
			exit={{
				x: 500,
				opacity: 0,
				scale: 0.2,
				transition: { type: "tween", stiffness: 100 },
			}}
		>
			<Alert
				severity={severity}
				onClose={() => setAlert((alert) => ({ ...alert, status: false }))}
			>
				Please enter a valid number from 1 - 99999
			</Alert>
		</AlertMotion>
	);
};

const Box = ({ digit, repeat, repeatType, from }) => {
	return (
		<BoxContainer>
			{repeat && repeatType && from ? (
				<Motion
					// initial={{ y: 150 }}
					animate={{ y: 0 }}
					transition={{
						from: 150,
						repeat: Infinity,
						repeatType: "loop",
						duration: 1,
						type: "spring",
						stiffness: 30,
					}}
				>
					{digit}
					{console.log(digit, repeat, repeatType, from)}
				</Motion>
			) : (
				<Motion
					animate={{ y: 0 }}
					transition={{
						duration: 1,
						type: "spring",
						stiffness: 30,
					}}
				>
					{digit}
				</Motion>
			)}
		</BoxContainer>
	);
};

const BoxContainer = styled.div`
	border-radius: 15%;
	height: 120px;
	width: 120px;
	margin: auto;
	display: flex;
	overflow: hidden;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme }) => theme.color.heading};
`;

const AlertMotion = styled(motion.div)`
	position: absolute;
	top: 4%;
	left: 0;
	right: 0;
	width: 50%;
	margin: auto;
	z-index: 100;
`;

const Motion = styled(motion.div)`
	border-radius: 15%;
	height: 150px;
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 4.5rem;
	color: ${({ theme }) => theme.color.heading};
	font-weight: 700;
	border: 5px solid #8b1eff;
	background-color: #8b1eff;
`;

const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.color.text} !important;
	font-size: 1rem !important;
	font-weight: 900 !important;
	&:hover {
		background-color: #ffb7ff !important;
	}
	&:disabled {
		opacity: 0.3 !important;
	}
`;

const StyledButton2 = styled(Button)`
	color: ${({ disabled }) => disabled && "gray"} !important;
	border-color: ${({ disabled }) => disabled && "gray"} !important;
	font-size: 1rem !important;
	font-weight: 900 !important;
`;

const Heading = styled.h1`
	font-size: 3rem;
	color: ${({ theme }) => theme.color.text};
	text-align: center;
`;

const Input = styled(TextField)`
	margin-top: 3rem !important;
	width: 100% !important;
	color: ${({ theme }) => theme.color.text} !important;
	overflow: visible !important;
	& .MuiInputBase-root {
		color: ${({ theme }) => theme.color.text} !important;
	}
	& .MuiOutlinedInput-root {
		& fieldset {
			border-color: ${({ theme }) => theme.color.text} !important;
		}
		&:hover fieldset {
			border-color: ${({ theme }) => theme.color.text} !important;
		}
		&.Mui-focused fieldset {
			border-color: ${({ theme }) => theme.color.text} !important;
		}
	}
	& .MuiInputLabel-root {
		color: ${({ theme }) => theme.color.text} !important;
	}
	& .MuiFormLabel-root.Mui-focused {
		color: ${({ theme }) => theme.color.text} !important;
	}
	& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: ${({ theme }) => theme.color.text} !important;
	}
	& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
		color: ${({ theme }) => theme.color.text} !important;
	}
	& .MuiOutlinedInput-input {
		color: ${({ theme }) => theme.color.text} !important;
	}
	& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: ${({ theme }) => theme.color.text} !important;
	}
	& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
		color: ${({ theme }) => theme.color.text} !important;

		&::placeholder {
			color: ${({ theme }) => theme.color.text} !important;
		}
	}
	& .MuiOutlinedInput-input {
		&::placeholder {
			color: ${({ theme }) => theme.color.text} !important;
		}
	}
	& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
		color: ${({ theme }) => theme.color.text} !important;
	}
	& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
		color: ${({ theme }) => theme.color.text} !important;
	}
`;
