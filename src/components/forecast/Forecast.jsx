import React from "react";
import { UilSun } from "@iconscout/react-unicons";
import { motion, AnimatePresence } from "framer-motion";

function Forecast({ title }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.45 }}
          className="my-4 w-full rounded-xl bg-white/10 p-1 shadow-xl backdrop-blur-2xl hover:backdrop-blur-3xl"
        >
          <div className="flex flex-col">
            <div className="flex flex-row justify-center border-b-2 px-2 py-2 md:justify-start md:border-gray-200">
              {title}
            </div>
            <div className="flex flex-row overflow-y-scroll py-1">
              <div className="flex basis-1/5 flex-col items-center whitespace-nowrap py-1 px-2">
                <div>04:30 PM</div>
                <div className="py-1">
                  <UilSun />
                </div>
                <div className="py-1">22°</div>
              </div>
              <div className="flex basis-1/5 flex-col items-center whitespace-nowrap py-1 px-2">
                <div>04:30 PM</div>
                <div className="py-1">
                  <UilSun />
                </div>
                <div className="py-1">22°</div>
              </div>
              <div className="flex basis-1/5 flex-col items-center whitespace-nowrap py-1 px-2">
                <div>04:30 PM</div>
                <div className="py-1">
                  <UilSun />
                </div>
                <div className="py-1">22°</div>
              </div>
              <div className="flex basis-1/5 flex-col items-center whitespace-nowrap py-1 px-2">
                <div>04:30 PM</div>
                <div className="py-1">
                  <UilSun />
                </div>
                <div className="py-1">22°</div>
              </div>
              <div className="flex basis-1/5 flex-col items-center whitespace-nowrap py-1">
                <div>04:30 PM</div>
                <div className="py-1">
                  <UilSun />
                </div>
                <div className="py-1">22°</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Forecast;
