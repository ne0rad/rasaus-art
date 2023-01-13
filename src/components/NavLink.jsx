import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavLink = ({ children, to, className = "" }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                boxShadow: "var(--shadow-lg)",
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                to={to}
                className={`${className} text-gray-600 hover:text-black text-lg font-medium rounded-lg py-2 px-4`}
            >
                {children}
            </Link>
        </motion.div>
    );
};

export default NavLink;
