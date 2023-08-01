import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

//Date Now Method for the elapsed time is more efficient than Counter + 1 method because of some inconsistency with the digit updating because of some delays. Elapsed time here is the Milliseconds.

let id = 0;

const StopWatch = () => {
	const [timer, setTimer] = useState({
		startTime: 0,
		elapsedTime: 0,
		started: false,
		hh: 0,
		mm: 0,
		ss: 0,
	});

	useEffect(() => {
		if (timer.started) {
			id = setInterval(() => {
				setTimer((prev) => {
					let {
						hh: HH,
						mm: MM,
						ss: SS,
						elapsedTime: Ms,
						startTime: start,
					} = prev;
					MM === 60 ? (HH++, (MM = 0)) : null;
					SS === 60 ? (MM++, (SS = 0)) : null;
					Ms >= 990
						? (SS++, (Ms = 0), (start = Date.now()))
						: (Ms = Date.now() - start);
					return {
						...prev,
						hh: HH,
						mm: MM,
						ss: SS,
						elapsedTime: Ms,
						startTime: start,
					};
				});
			}, 5);
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
			hh: 0,
			mm: 0,
			ss: 0,
		});
	};

	return (
		<StyledTimer className="scroll">
			<Heading>Stop&nbsp;Watch</Heading>
			<div style={styles.div}>
				<h1
					style={{
						letterSpacing: "0.15rem",
						color: "var(--secondary)",
						fontSize: "4rem",
					}}
				>
					{timer.hh < 10 ? `0${timer.hh}` : `${timer.hh}`}:
					{timer.mm < 10 ? `0${timer.mm}` : `${timer.mm}`}:
					{timer.ss < 10 ? `0${timer.ss}` : `${timer.ss}`}:
					{timer.elapsedTime < 10
						? `0${timer.elapsedTime}`
						: `${timer.elapsedTime}`.slice(0, 2)}
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
					disabled={!timer.started && timer.startTime === 0}
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
	font-size: 4rem;
	color: #ffb7ff;
	text-align: center;
`;
const StyledTimer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	overflow: hidden;
`;

export default StopWatch;
