import React from "react";
import { Link } from "react-router-dom";
import ClientsMoreNames from "./ClientsMoreNames";
const ClientsReviewPage = () => {
  return (
    <>
      <div className="w-full py-[2.33vw] font-['Neue_Montreal']">
        <div className="px-[5vw] w-full border-b-[1px] border-zinc-500 pb-8">
          <h1 className="text-[4vw] font-['Neue_Montreal'] tracking-tight">
            Clents's reviews
          </h1>
        </div>

        <div className="mt-4 flex justify-between items-center px-20">
          <h1 className="font-normal text-lg  leading-none underline underline-offset-4">
            <Link
              to="https://hypercare-systems.com/lander"
              className="cursor-pointer"
            >
              Karman Ventures
            </Link>
          </h1>
          <div className="font-normal text-lg  leading-none">
            <h1 className="">Services:</h1>
          </div>
          <div className="font-normal text-lg leading-none">
            <h1 className="">William Barnes</h1>
          </div>
          <div className="start mt-1 flex items-center gap-3">
            <div className="px-4 py-1 text-zinc-300 font-normal text-base rounded-full uppercase">
              read
            </div>
          </div>
        </div>
        {/* Secound section about image and links */}
        <div className="font-['Neue_Montreal'] flex gap-6 justify-evenly items-center ml-80">
          <div className="">
            <button className="rounded-3xl border-[1px] uppercase flex flex-col border-zinc-900 px-5 py-1">
              invester deck
            </button>
            <button className="rounded-3xl border-[1px] mt-5 uppercase border-zinc-900 px-5 py-1">
              sales deck
            </button>
          </div>
          <div className="py-12">
            <img
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt="image"
              className="w-[8vw] h-[8vw] rounded-2xl"
            />
            <p className="text-sm w-[25vw] mt-5">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
      </div>

      {/* This section is the more details about the client  */}
      <ClientsMoreNames />
    </>
  );
};

export default ClientsReviewPage;
