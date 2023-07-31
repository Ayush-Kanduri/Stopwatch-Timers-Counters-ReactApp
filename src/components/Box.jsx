/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styled from "styled-components";

const Box = ({ digit, digitRef, push, setPush }) => {
	function setAnimation() {
		digitRef.current.textContent = digit;
		setPush(false);
	}
	return (
		<BoxContainer>
			<div className="previousDigit" ref={digitRef}>
				0
			</div>
			{push && (
				<Motion
					animate={{ y: 0 }}
					transition={{
						from: -150,
						duration: 0.5,
						ease: "easeInOut",
						//This controls the speed of the animation because the 1 second timer has been handled by the setInterval. The animation speed < timer time because after the timer starts within that 1 second the animation should complete otherwise the animation would exceed the timer time which would give wrong results.
						// repeat: Infinity, repeatType: "loop", type: "spring", stiffness: 30,
					}}
					onAnimationComplete={() => setAnimation()}
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
	background-color: #8b1eff;
	position: relative;
	.previousDigit {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		font-size: 4.5rem;
		color: ${({ theme }) => theme.color.heading};
		font-weight: 700;
	}
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
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 1);
	background-color: #8b1eff;
`;

export default Box;
