import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function TimeAndLocation() {
  return (
    <AnimatePresence>
      <div>
        <div className="flex flex-col items-center">
          <p className="text-white/75">Sat, Mar 18 2023 | Local Time 10:32</p>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="overflow-hidden py-2 text-5xl font-semibold text-white md:py-6"
            >
              Berlin, DE
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default TimeAndLocation;
