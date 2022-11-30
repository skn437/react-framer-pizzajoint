import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			//delay: 0.5,
			//stiffness: 120,
			//! Orchestration Properties with "Spring" Animation
			mass: 0.4,
			damping: 8,
			when: "beforeChildren",
			staggerChildren: 0.4,
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const Order = ({ pizza, setShowModal }) => {
	const [showTitle, setShowTitle] = useState(true);

	setTimeout(() => {
		setShowTitle(false);
	}, 4000);

	useEffect(() => {
		setTimeout(() => {
			setShowModal(true);
		}, 5000);
	}, [setShowModal]);

	return (
		<motion.div
			className="container order"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<AnimatePresence>
				{showTitle && (
					<motion.h2
						exit={{
							y: -1000,
						}}
					>
						Thank you for your order :)
					</motion.h2>
				)}
			</AnimatePresence>

			<motion.p variants={childVariants}>
				You ordered a {pizza.base} pizza with:
			</motion.p>

			<motion.div variants={childVariants}>
				{pizza.toppings.map((topping) => (
					<div key={topping}>{topping}</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Order;

