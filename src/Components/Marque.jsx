import { motion } from "framer-motion";
import React from "react";

const Marque = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full text-white rounded-t-3xl bg-[#004D43] py-20 flex mt-20"
    >
      <div className="border-t-2 border-b-2 border-zinc-400 text-[28vh] flex whitespace-nowrap uppercase overflow-hidden ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="leading-none font-bold -tracking-[0.7rem] mb-4  pr-6"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="leading-none font-bold -tracking-[0.7rem] mb-4 pr-6"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="leading-none font-bold -tracking-[0.7rem] mb-4 pr-6"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
