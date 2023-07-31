/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ButtonTwo = ({ reset, active, input }) => {
	return (
		<StyledButton2
			size="large"
			sx={{ width: "100%" }}
			variant="outlined"
			startIcon={<DeleteIcon />}
			color="error"
			onClick={reset}
			disabled={!active && input.value === ""}
		>
			Reset
		</StyledButton2>
	);
};

export default ButtonTwo;

const StyledButton2 = styled(Button)`
	color: ${({ disabled }) => disabled && "gray"} !important;
	border-color: ${({ disabled }) => disabled && "gray"} !important;
	font-size: 1rem !important;
	font-weight: 900 !important;
`;
