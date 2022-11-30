import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const buttonVariant = {
	// visible: {
	// 	x: [0, -20, 20, -20, 20, 0],
	// 	transition: {
	// 		delay: 2,
	// 	},
	// },
	hover: {
		scale: 1.1,
		textShadow: "0 0 8px 0 rgb(255, 255, 255)",
		boxShadow: "0 0 8px 0 rgb(255, 255, 255)",
		transition: {
			yoyo: Infinity,
		},
	},
};

const Home = () => {
	return (
		<motion.div
			className="home container"
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				delay: 1.5,
				duration: 1.5,
			}}
		>
			<h2>Welcome to Pizza Joint</h2>
			<Link to="/base">
				<motion.button
					variants={buttonVariant}
					animate="visible"
					whileHover="hover"
				>
					Create Your Pizza
				</motion.button>
			</Link>

			<Loader></Loader>
		</motion.div>
	);
};

export default Home;

