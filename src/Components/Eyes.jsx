import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen cursor-pointer overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="w-full h-full relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] flex gap-10 -translate-y-[50%] ">
          {/* First Eye */}
          <div className="flex items-center justify-center   h-[15vw] w-[15vw] rounded-full bg-zinc-100">
            <div className="relative h-2/3 w-2/3 rounded-full bg-gray-900">
              <div className="text-md text-white text-2xl mt-[55px] uppercase ml-[49px] inline-block ">
                Play
              </div>
              <div
                style={{
                  transform: `translate(-50% ,-50%) rotate(${rotate}deg)`,
                }}
                className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-100"
              >
                <div className="h-7 w-7 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          {/* Secound Eye  */}
          <div className="flex items-center justify-center h-[15vw] w-[15vw] rounded-full bg-zinc-100">
            <div className="h-2/3 w-2/3 relative rounded-full bg-gray-900">
              <div className="text-md text-white text-2xl mt-[55px] uppercase ml-[49px] inline-block ">
                Play
              </div>
              <div
                style={{
                  transform: `translate(-50% ,-50%) rotate(${rotate}deg)`,
                }}
                className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-100"
              >
                <div className="h-7 w-7 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
