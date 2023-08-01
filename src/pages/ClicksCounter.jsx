import styled from "styled-components";
import Button from "@mui/material/Button";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

const ClicksCounter = () => {
	const [count, setCount] = useState(0);
	const resetTimer = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setCount(0);
	};
	const increaseCount = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setCount((prev) => prev + 1);
	};
	return (
		<Container onClick={increaseCount}>
			<Stack direction="column" spacing={5}>
				<Heading>Clicked {count} times!</Heading>
				<StyledButton2
					size="large"
					color="error"
					variant="contained"
					startIcon={<DeleteIcon />}
					onClick={resetTimer}
				>
					RESET
				</StyledButton2>
			</Stack>
		</Container>
	);
};

export default ClicksCounter;

const Container = styled.div`
	width: 100%;
	height: 100%;
	border: 5px solid gree;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Heading = styled.h1`
	font-size: 3rem;
	color: ${({ theme }) => theme.color.text};
	text-align: center;
`;

const StyledButton2 = styled(Button)`
	background-color: ${({ theme }) => theme.color.text} !important;
	font-size: 1rem !important;
	font-weight: 900 !important;
	color: black !important;
	&:hover {
		background-color: #ffb7ff !important;
	}
	&:disabled {
		opacity: 0.3 !important;
	}
`;
