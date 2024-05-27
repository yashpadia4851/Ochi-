import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <>
      <div
        // data-scroll-section
        data-scroll
        data-scroll-speed="-.3"
        className="w-full h-screen bg-white pt-1"
      >
        <div className="textStructure mt-40 px-16 text-zinc-900">
          {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-fit flex items-center">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "8vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    >
                      <img
                        className="mr-[1vw] w-[8vw] h-[10 vh] rounded-xl -top-[1.2vw] relative"
                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                        alt=""
                      />
                    </motion.div>
                  )}
                  <h1 className="ml-2 text-[7.5vw] cursor-default leading-[6vw] font-['Founders_Grotesk'] uppercase tracking-tighter font-bold">
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-[1px] border-gray-400 mt-28 flex justify-between items-center py-4 px-20">
          {[
            "For public and private companies",
            "Form the first pitch to IPO",
          ].map((item, index) => (
            <p
              key={index}
              className="font-normal text-lg tracking-tighter leading-none"
            >
              {item}
            </p>
          ))}
          <div className="start mt-1 flex items-center gap-3">
            <div className="px-4 py-1 border-[2px] border-gray-300 font-normal text-base rounded-full uppercase">
              Start the project
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center border-[1px] border-gray-300">
              <FaArrowUpRightFromSquare />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-zinc-700 mt-5">
          <h1 className="text-lg text-zinc-400 font-['Neue_Montreal']">
            Scroll Down
          </h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
