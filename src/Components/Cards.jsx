import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="w-full h-screen px-16 py-32 flex gap-5">
      <div className="cardcontainer w-1/2 h-[55vh] ">
        <div className="card relative w-full rounded-2xl h-full bg-[#004D43] flex justify-center items-center">
          <img
            data-component="lazyload"
            data-animate="data-animate"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            height="150"
            width="150"
            data-src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute left-10 bottom-7 border-[1px] border-[#CDEA68] px-4 py-1 rounded-full">
            <span className="text-[#CDEA68]">©2019-2022</span>
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[55vh] flex gap-5 ">
        <div className="card relative rounded-2xl w-1/2 h-full bg-[#212121] flex justify-center items-center">
          <Link to="https://clutch.co/profile/ochi-design-presentation-design-agency#summary">
            <img
              data-component="lazyload"
              data-animate="data-animate"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              height="150"
              width="150"
              data-src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            />
            <button className="absolute left-6 bottom-7 border-[1px] border-[#F4F4F4] px-4 py-1 rounded-full">
              <span className="text-[#F4F4F4] uppercase leading-none tracking-tighter">
                rating 5.0 on clutch
              </span>
            </button>
          </Link>
        </div>
        <div className="card relative rounded-2xl w-1/2 h-full bg-[#212121] flex justify-center items-center">
          <img
            data-component="lazyload"
            data-animate="data-animate"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            height="104"
            width="102"
            data-src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute left-6 bottom-7 border-[1px] border-[#F4F4F4] px-4 py-1 rounded-full">
            <span className="text-[#F4F4F4] uppercase leading-none tracking-tighter">
              business bootcamp alumni
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
