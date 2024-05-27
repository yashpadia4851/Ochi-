import React, { useState } from "react";
import Viewallcase from "./Viewallcase";
import { delay, motion, useAnimation } from "framer-motion";

const Features = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <>
      <div className="w-full py-[8.33vw]">
        <div className="px-[5vw] w-full border-b-[1px] border-zinc-500 pb-8">
          <h1 className="text-[4vw] font-['Neue_Montreal'] tracking-tight">
            Featured projects
          </h1>
        </div>
        {/* This is the 1st and 2nd cards section */}
        <div className="px-16">
          <div className="flex items-center font-['Neue_Montreal']">
            <div className="text-[1.4vw] mt-12">
              <ul>
                <li>FYDE</li>
              </ul>
            </div>
            <div className="text-[1.4vw] mt-12 ml-[43.2vw]">
              <ol>
                <li>VISE</li>
              </ol>
            </div>
          </div>
          <div className="cards flex gap-6 mt-2">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardContainer1 relative w-1/2 h-[40vw]"
            >
              <h1 className="absolute flex overflow-hidden left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20  leading-none text-9xl font-semibold">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  className="w-full h-full"
                  alt="image"
                />
              </div>
              <div className="mt-3 flex gap-3">
                <button className="rounded-3xl border-[1px] uppercase border-zinc-900 py-2 px-5">
                  audit
                </button>
                <button className="rounded-3xl border-[1px] uppercase border-zinc-900 py-2  px-5">
                  copywriting
                </button>
                <button className="rounded-3xl border-[1px] uppercase border-zinc-900 py-2  px-5">
                  sales deck
                </button>
                <button className="rounded-3xl border-[1px] uppercase border-zinc-900 py-2  px-5">
                  slides design
                </button>
              </div>
            </motion.div>

            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardContainer2 relative w-1/2 h-[40vw] "
            >
              <h1 className="absolute flex overflow-hidden right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-20  leading-none text-9xl font-semibold">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  className="w-full h-full"
                  alt="image"
                />
              </div>
              <div className="mt-3 flex gap-4">
                <button className="rounded-3xl border-[1px] uppercase border-zinc-900 py-2  px-5">
                  Agency
                </button>
                <button className="rounded-3xl border-[1px] uppercase border-zinc-900 py-2  px-5">
                  Company presentation
                </button>
              </div>
            </motion.div>
          </div>

          {/* This is the 3rd and 4th cards section */}
          <div className="flex items-center font-['Neue_Montreal'] mt-9">
            <div className="text-[1.4vw] mt-12">
              <ul>
                <li>TRAWA</li>
              </ul>
            </div>
            <div className="text-[1.4vw] mt-12 ml-[41.6vw]">
              <ol>
                <li>PREMIUM BLEND</li>
              </ol>
            </div>
          </div>
          <div className="cards flex gap-6 mt-3">
            <motion.div
              onHoverStart={() => handleHover(2)}
              onHoverEnd={() => handleHoverEnd(2)}
              className="cardContainer3 relative w-1/2 h-[40vw] "
            >
              <h1 className="absolute flex overflow-hidden left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20  leading-none text-8xl font-semibold">
                {"TRAWA".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-300x242.jpg"
                  className="w-full h-full"
                  alt="image"
                />
              </div>
              <div className="mt-3 flex gap-3">
                <button className="rounded-3xl border-[1px] uppercase border-zinc-900 py-2 px-5">
                  brand identity
                </button>
                <button className="rounded-3xl border-[1px] uppercase border-zinc-900 py-2  px-5">
                  desgin research
                </button>
                <button className="rounded-3xl border-[1px] uppercase border-zinc-900 py-2  px-5">
                  investor deck
                </button>
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              className="cardContainer4 relative w-1/2 h-[40vw] "
            >
              <h1 className="absolute flex overflow-hidden right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-20  leading-none text-8xl font-semibold">
                {"PREMIUM BLEND".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  className="w-full h-full"
                  alt="image"
                />
              </div>
              <div className="mt-3 flex gap-4">
                <button className="rounded-3xl border-[1px] uppercase border-zinc-900 py-2  px-5">
                  Branded template
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Viewallcase />
    </>
  );
};

export default Features;
