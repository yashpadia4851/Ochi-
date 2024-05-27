import React from "react";

const Viewallcase = () => {
  return (
    <div className="flex justify-center items-center w-full py-10">
      {/* <button className="uppercase text-[18.9333px] items-center mt-3 flex gap-6 px-8 py-3 text-white bg-[#212121] rounded-full">
        view all case studies
        <div className="bg-white w-2 h-2 rounded-full"></div>
      </button> */}
      <button className="border flex justify-center items-center text-gray-50 py-4 px-3  uppercase text-[18.9333px] duration-300 relative group cursor-pointer rounded-full overflow-hidden h-[60px] w-[13rem] bg-neutral-800 p-2  font-extrabold hover:bg-zinc-400">
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
        <p className="z-10 absolute bottom-2 left-2 mb-2 ml-2">all case studies</p>
        {/* <div className="bg-white w-2 h-2 rounded-full"></div> */}
      </button>
    </div>
  );
};

export default Viewallcase;
