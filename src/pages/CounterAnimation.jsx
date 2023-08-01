/* eslint-disable react/prop-types */
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeleteIcon from "@mui/icons-material/Delete";

const CounterAnimation = () => {
	const [active, setActive] = useState(false);
	const [readyToStart, setReadyToStart] = useState(true);
	const startAnimation = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setActive(true);
		setReadyToStart(false);
	};
	const stopAnimation = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setReadyToStart(true);
	};
	return (
		<Container className="scroll">
			<Heading>Counter Animation</Heading>
			<Stack direction="row" spacing={20} sx={{ alignItems: "center" }}>
				<Socials
					icon={
						<InstagramIcon
							sx={{
								fontSize: 85,
								position: "absolute",
								top: 0,
								color: "#cb30ac",
							}}
						/>
					}
					title="Instagram"
					active={active}
					setActive={setActive}
					readyToStart={readyToStart}
					target={30_000}
				/>
				<Socials
					icon={
						<YouTubeIcon
							sx={{
								fontSize: 110,
								position: "absolute",
								top: -15,
								color: "red",
							}}
						/>
					}
					title="YouTube"
					active={active}
					setActive={setActive}
					readyToStart={readyToStart}
					target={60_000}
				/>
			</Stack>
			<Stack
				direction="row"
				spacing={15}
				sx={{ alignItems: "center", justifyContent: "center" }}
			>
				{!active && readyToStart && (
					<StyledButton
						size="large"
						variant="contained"
						startIcon={<AlarmIcon />}
						onClick={startAnimation}
					>
						Start Counter
					</StyledButton>
				)}
				{!active && !readyToStart && (
					<StyledButton2
						size="large"
						variant="outlined"
						startIcon={<DeleteIcon />}
						color="error"
						onClick={stopAnimation}
					>
						Reset Counter
					</StyledButton2>
				)}
			</Stack>
		</Container>
	);
};

export default CounterAnimation;

const Socials = ({ icon, title, active, target, setActive, readyToStart }) => {
	let ID = useRef(0);
	const [count, setCount] = useState(0);
	const [speed] = useState(500);
	const constantSpeed = Math.floor(target / speed);

	useEffect(() => {
		if (count === target) setActive(false);
	}, [count, setActive, target]);

	useEffect(() => {
		if (active && !readyToStart) {
			ID.current = setInterval(() => {
				setCount((prev) => {
					if (prev < target) return prev + constantSpeed;
					else {
						clearInterval(ID.current);
						return target;
					}
				});
			}, 5);
		} else if (!active && readyToStart) {
			setCount(0);
			clearInterval(ID.current);
		}
		return () => clearInterval(ID.current);
	}, [active, readyToStart, target, constantSpeed]);

	return (
		<Stack
			direction="column"
			spacing={2}
			sx={{
				alignItems: "center",
				justifyContent: "flex-end",
				position: "relative",
				height: "220px",
			}}
		>
			{icon}
			<h1 style={{ fontSize: "3rem" }}>
				{new Intl.NumberFormat("en-IN").format(count)}
			</h1>
			<h1 style={{ fontSize: "2.2rem" }}>{title}</h1>
		</Stack>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	overflow: hidden;
	gap: 5rem;
`;

const Heading = styled.h1`
	font-size: 3rem;
	color: ${({ theme }) => theme.color.text};
	text-align: center;
`;

const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.color.text} !important;
	font-size: 1rem !important;
	font-weight: 900 !important;
	color: black !important;
	padding: 0.5rem 1rem !important;
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
	padding: 0.5rem 1rem !important;
`;
