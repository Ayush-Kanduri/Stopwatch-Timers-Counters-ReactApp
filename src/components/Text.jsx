/* eslint-disable react/prop-types */
import styled from "styled-components";
import TextField from "@mui/material/TextField";

const Text = ({ input, active, count }) => {
	return (
		<Input
			id="outlined-number"
			label="Number"
			type="number"
			value={input.value}
			onChange={input.onChange}
			disabled={active && count >= 0}
		/>
	);
};

export default Text;

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
