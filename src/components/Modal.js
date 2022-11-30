import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

const modalV = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "200px",
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},
};

const Modal = ({ showModal, setShowModal }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{showModal && (
				<motion.div
					className="backdrop"
					variants={backdrop}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<motion.div
						className="modal"
						variants={modalV}
					>
						<p>Want to make another pizza</p>
						<Link to="/">
							<button
								onClick={() => {
									setShowModal(false);
								}}
							>
								Start Again
							</button>
						</Link>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
