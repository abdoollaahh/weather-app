import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import { UilWind, UilTear, UilTemperature } from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="flex flex-row justify-center"
      >
        <p className="text-xl font-medium text-sky-300">Clear</p>
      </motion.div>
      <div className="overflow-hidden py-2">
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row "
        >
          <div className="flex basis-1/3 flex-row justify-center">
            <SunIcon width={90} className="text-white" />
          </div>
          <div className="flex basis-1/3 flex-row items-center justify-center text-7xl text-white">
            20°
          </div>
          <div className="flex basis-1/3 flex-row items-center justify-center text-white/75 ">
            <div className="flex flex-col">
              <div className="flex transition duration-300 hover:text-white">
                <UilTemperature />
                <p>
                  Real Feel:<span className="text-white"> 18°</span>
                </p>
              </div>
              <div className="flex transition duration-300 hover:text-white">
                <UilTear />
                <p>
                  Humidity:<span className="text-white"> 43%</span>
                </p>
              </div>
              <div className="flex transition duration-300 hover:text-white">
                <UilWind />
                <p>
                  Wind:<span className="text-white"> 3 km/h</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
