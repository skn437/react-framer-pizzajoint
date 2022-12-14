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
	hidden: {
		x: "-100vw",
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			stiffness: 120,
		},
	},
	hover: {
		scale: 1.1,
		textShadow: "0 0 8px 0 rgb(255, 255, 255)",
		boxShadow: "0 0 8px 0 rgb(255, 255, 255)",
		transition: {
			yoyo: Infinity,
		},
	},
};

const Toppings = ({ addTopping, pizza }) => {
	let toppings = [
		"mushrooms",
		"peppers",
		"onions",
		"olives",
		"extra cheese",
		"tomatoes",
	];

	return (
		<motion.div
			className="toppings container"
			variants={containerVariants}
			initial="initial"
			animate="animate"
		>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping) ? "active" : "";
					return (
						<motion.li
							key={topping}
							onClick={() => addTopping(topping)}
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
							<span className={spanClass}>{topping}</span>
						</motion.li>
					);
				})}
			</ul>

			<Link to="/order">
				<motion.button
					variants={buttonVariant}
					initial="hidden"
					animate="visible"
					whileHover="hover"
				>
					Order
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Toppings;

