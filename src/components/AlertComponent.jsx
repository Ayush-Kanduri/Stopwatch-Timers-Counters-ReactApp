/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styled from "styled-components";
import Alert from "@mui/material/Alert";

const AlertComponent = ({ setAlert, severity, message }) => {
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
				onClose={() => setAlert({ status: false, severity: "error" })}
			>
				{message}
			</Alert>
		</AlertMotion>
	);
};

export default AlertComponent;

const AlertMotion = styled(motion.div)`
	position: absolute;
	top: 4%;
	left: 0;
	right: 0;
	width: 50%;
	margin: auto;
	z-index: 100;
`;
