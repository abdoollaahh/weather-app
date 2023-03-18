import React from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Inputs = () => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.45 }}
        >
          <input
            type="text"
            placeholder="Search for a city..."
            className="mx-2 rounded-md bg-white/20 p-1 px-3 text-xl font-light capitalize text-white placeholder-white shadow-2xl backdrop-blur-md transition duration-300 placeholder:lowercase hover:shadow-xl focus:outline-none"
          />
        </motion.div>

        <div className="flex flex-row items-center justify-between">
          <MagnifyingGlassIcon
            className="cursor-pointer text-white/75 transition duration-500 hover:scale-105 hover:text-white"
            width={22}
            height={22}
          />
          <MapPinIcon
            className="cursor-pointer text-white/75 transition duration-500 hover:scale-105 hover:text-white"
            width={22}
            height={22}
          />
        </div>
        <div className="flex w-1/4 flex-row items-center justify-center text-white/75 ">
          <button
            name="metric"
            className="cursor-pointer transition duration-500 hover:scale-105 hover:text-white"
          >
            °C
          </button>
          <p className="mx-1 text-2xl">|</p>
          <button
            name="imperial"
            className="cursor-pointer transition duration-500 hover:scale-105 hover:text-white"
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
