import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
	initial: {
		opacity: 0,
		x: "100vw",
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			//delay: 0.5,
			stiffness: 120,
		},
	},
};

const nextVariant = {
	initial: {
		x: "-100vw",
	},
	animate: {
		x: 0,
		transition: {
			type: "spring",
			stiffness: 120,
		},
	},
};

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

const Base = ({ addBase, pizza }) => {
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<motion.div
			className="base container"
			variants={containerVariants}
			initial="initial"
			animate="animate"
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? "active" : "";
					return (
						<motion.li
							key={base}
							onClick={() => addBase(base)}
							whileHover={{
								scale: 1.3,
								color: "#f8e112",
								originX: 0,
							}}
							transition={{
								type: "spring",
								stiffness: 300,
							}}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<motion.div
					className="next"
					variants={nextVariant}
					// initial="initial"
					// animate="animate"
				>
					<Link to="/toppings">
						<motion.button
							variants={buttonVariant}
							whileHover="hover"
						>
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Base;

