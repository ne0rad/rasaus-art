import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center w-full sticky top-0 z-10 shadow-lg">
      <h1 className="text-2xl font-medium">
        <Link to="/">RasaUs Art</Link>
      </h1>
      <div className="flex">
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative"
        >
          <NavLink to="/">Naujienos</NavLink>
        </motion.div>
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative"
        >
          <NavLink to="/services">Paslaugos</NavLink>
        </motion.div>
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative"
        >
          <NavLink to="/contacts">Kontaktai</NavLink>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
