/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";

const ButtonOne = ({ start, active, count }) => {
	return (
		<StyledButton
			size="large"
			sx={{ color: "black", width: "100%" }}
			variant="contained"
			startIcon={<AlarmIcon />}
			onClick={start}
			disabled={active && count >= 0}
		>
			Start
		</StyledButton>
	);
};

export default ButtonOne;

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
