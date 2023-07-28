import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

let id = 0;

const formatTimer = (time) => {
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let HH = "00";
	let MM = "00";
	let SS = "00";

	//If time is 0
	if (time === 0) return `${HH}:${MM}:${SS}`;
	//If time is less than 1 minute
	else if (time > 0 && time < 60) {
		seconds = Math.floor(time);
		if (seconds < 10) SS = `0${seconds}`;
		else SS = `${seconds}`;
	}

	//If time is more than 1 minute but less than 1 hour
	else if (time >= 60 && time < 3600) {
		let val1 = Math.abs(time / 60);
		minutes = Math.floor(val1);
		seconds = Math.floor((val1 - minutes) * 60);
		seconds = Math.floor(seconds);

		if (seconds < 10) SS = `0${seconds}`;
		else SS = `${seconds}`;
		if (minutes < 10) MM = `0${minutes}`;
		else MM = `${minutes}`;
	}

	//If time is more than 1 hour
	else {
		let val1 = Math.abs(time / 3600);
		hours = Math.floor(val1);
		minutes = Math.floor((val1 - hours) * 60);
		minutes = Math.floor(minutes);

		let val2 = Math.abs(minutes / 60);
		minutes = Math.floor(val2);
		seconds = Math.floor((val2 - minutes) * 60);
		seconds = Math.floor(seconds);

		if (seconds < 10) SS = `0${seconds}`;
		else SS = `${seconds}`;
		if (minutes < 10) MM = `0${minutes}`;
		else MM = `${minutes}`;
		if (hours < 10) HH = `0${hours}`;
		else HH = `${hours}`;
	}

	console.log(`${HH}:${MM}:${SS}`);
	return `${HH}:${MM}:${SS}`;
};

const Timer = () => {
	// Use multiple hooks to manage digits
	// Use Count + 1 method
	// Use Box drop down animation
	const [timer, setTimer] = useState({
		startTime: 0,
		elapsedTime: 0,
		started: false,
	});
	const [hour, setHour] = useState();
	const [minute, setMinute] = useState();
	const [second, setSecond] = useState();
	const [active, setActive] = useState();

	useEffect(() => {
		if (timer.started) {
			id = setInterval(() => {
				setTimer((prev) => ({
					...prev,
					elapsedTime: Date.now() - prev.startTime,
				}));
			}, 100);
		} else {
			clearInterval(id);
		}
		return () => clearInterval(id);
	}, [timer.started]);

	const toggleTimer = () => {
		if (timer.started) {
			setTimer((prev) => ({
				...prev,
				elapsedTime: Date.now() - prev.startTime,
				started: !prev.started,
			}));
		} else {
			setTimer((prev) => ({
				...prev,
				startTime: Date.now() - prev.elapsedTime,
				started: !prev.started,
			}));
		}
	};

	const resetTimer = () => {
		clearInterval(id);
		setTimer({
			elapsedTime: 0,
			startTime: 0,
			started: false,
		});
	};

	return (
		<StyledTimer>
			<Heading>Timer</Heading>
			<div style={styles.div}>
				<h1 style={{ letterSpacing: "0.15rem", color: "var(--secondary)" }}>
					{formatTimer(Math.floor(timer.elapsedTime / 1000))}
				</h1>
				<StyledButton
					size="large"
					sx={{ color: "black", width: "100%" }}
					variant="contained"
					startIcon={<AlarmIcon />}
					onClick={toggleTimer}
				>
					{timer.started ? "Pause" : "Start"}
				</StyledButton>
				<StyledButton2
					size="large"
					sx={{ width: "100%" }}
					variant="outlined"
					startIcon={<DeleteIcon />}
					color="error"
					onClick={resetTimer}
					disabled={timer.elapsedTime === 0}
				>
					Reset
				</StyledButton2>
			</div>
		</StyledTimer>
	);
};

const styles = {
	div: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		textAlign: "center",
		gap: "1rem",
	},
};

const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.color.text} !important;
	&:hover {
		background-color: #ffb7ff !important;
	}
`;
const StyledButton2 = styled(Button)`
	color: ${({ disabled }) => disabled && "gray"} !important;
	border-color: ${({ disabled }) => disabled && "gray"} !important;
`;
const Heading = styled.h1`
	font-size: 3rem;
	color: ${({ theme }) => theme.color.text};
	text-align: center;
`;
const StyledTimer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	align-items: center;
`;

export default Timer;
