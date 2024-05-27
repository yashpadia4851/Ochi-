import React from "react";
import { Link } from "react-router-dom";

const ClientsMoreNames = () => {
  return (
    <div className="w-full font-['Neue_Montreal']">
      <div className="mt-4 flex justify-between items-center px-20 w-full border-t-[1px] border-zinc-700 p-1">
        <h1 className=" text-lg leading-none underline underline-offset-4">
          <Link
            to="https://www.onetrust.com/solutions/esg-and-sustainability-cloud/"
            className="cursor-pointer"
          >
            Planetly
          </Link>
        </h1>
        <div className="font-normal text-lg leading-none">
          <h1 className="text-center">Naina Walloch</h1>
        </div>
        <div className="start mt-1 flex items-center gap-3">
          <div className="px-4 py-1 text-zinc-900 font-normal underline underline-offset-4 text-base rounded-full uppercase">
            read
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center px-20 w-full border-t-[1px] border-zinc-700 p-1">
        <h1 className="font-normal text-lg leading-none underline underline-offset-4">
          <Link to="https://www.workiz.com/" className="cursor-pointer">
            Workiz Easy
          </Link>
        </h1>
        <div className="font-normal text-lg leading-none">
          <h1 className="pr-10">Tomer Levy</h1>
        </div>
        <div className="start mt-1 flex items-center gap-3">
          <div className="px-4 py-1 text-zinc-900 font-normal underline underline-offset-4 text-base rounded-full uppercase">
            read
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center px-20 w-full border-t-[1px] border-zinc-700 p-1">
        <h1 className="font-normal text-lg leading-none underline underline-offset-4">
          <Link to="https://www.premium-blend.com/" className="cursor-pointer">
            Premium Blend
          </Link>
        </h1>
        <div className="font-normal text-lg leading-none">
          <h1 className="pr-12">Ellen Kim</h1>
        </div>
        <div className="start mt-1 flex items-center gap-3">
          <div className="px-4 py-1 text-zinc-900 font-normal underline underline-offset-4 text-base rounded-full uppercase">
            read
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center px-20 w-full border-t-[1px] border-zinc-700 p-1">
        <h1 className="font-normal text-lg leading-none underline underline-offset-4">
          <Link
            to="https://hypercare-systems.com/lander"
            className="cursor-pointer"
          >
            Hypercare Systems
          </Link>
        </h1>
        <div className="font-normal text-lg leading-none">
          <h1 className="pr-16">Brendan Goss</h1>
        </div>
        <div className="start mt-1 flex items-center gap-3">
          <div className="px-4 py-1 text-zinc-900 font-normal underline underline-offset-4 text-base rounded-full uppercase">
            read
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center px-20 w-full border-t-[1px] border-zinc-700 p-1">
        <h1 className="font-normal text-lg leading-none underline underline-offset-4">
          <Link to="https://orderlion.com/en" className="cursor-pointer">
            Orderlion
          </Link>
        </h1>
        <div className="font-normal text-lg leading-none">
          <h1 className="">Stefan Strohmer</h1>
        </div>
        <div className="start mt-1 flex items-center gap-3">
          <div className="px-4 py-1 text-zinc-900 font-normal underline underline-offset-4 text-base rounded-full uppercase">
            read
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center px-20 w-full border-t-[1px] border-zinc-700 p-1">
        <h1 className="font-normal text-lg leading-none underline underline-offset-4">
          <Link
            to="https://workleap.com/officevibe/"
            className="cursor-pointer"
          >
            Officevibe
          </Link>
        </h1>
        <div className="font-normal text-lg leading-none">
          <h1 className="">Raff Labrie</h1>
        </div>
        <div className="start mt-1 flex items-center gap-3">
          <div className="px-4 py-1 text-zinc-900 font-normal underline underline-offset-4 text-base rounded-full uppercase">
            read
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center px-20 w-full border-t-[1px] border-zinc-700 p-1">
        <h1 className="font-normal text-lg leading-none underline underline-offset-4">
          <Link to="https://blackbookapp.co/" className="cursor-pointer">
            Black Book
          </Link>
        </h1>
        <div className="font-normal text-lg leading-none">
          <h1 className="">Jaci Smith</h1>
        </div>
        <div className="start mt-1 flex items-center gap-3">
          <div className="px-4 py-1 text-zinc-900 font-normal underline underline-offset-4 text-base rounded-full uppercase">
            read
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsMoreNames;
