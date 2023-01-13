import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, i }) => {
  return (
    <Link to={service.id}>
        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.97 }}
          className="bg-white rounded-lg shadow-md p-6 m-2 max-w-md cursor-pointer"
        >
          <h2 className="text-xl font-medium">{service.name}</h2>
          <p className="text-gray-700 mt-2">{service.description}</p>
        </motion.div>
    </Link>
  );
};

export default ServiceCard;
