import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#CDEA68] p-[4.2vw] rounded-t-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[3.72vw] leading-[4.5vw] tracking-tight ">
        Ochi is a strategic partner for fast-growwing tech <br /> businesses
        that need to raise funds, sell prodducts,
        <br /> explain complex ideas, and hire great people.
      </h1>
      <div className="details w-full border-t-[1px] border-gray-700 mt-20 p-5 flex">
        <h1 className="text-[1.5vw]">What you can expect:</h1>
        <h2 className=" text-[1.2vw] ml-[29vw] pb-28">
          We create tailored presentations to help <br /> you persuade your
          colleagues, clients, or <br /> investors. Whether it's live or
          digital, <br />
          delivered for one or a hundred people.
          <br />
        </h2>
        <div className="LinksandS ml-36 mt-8">
          <h1 className="font-['Neue_Montreal']">S:</h1>
          <ul className="mt-6 underline-offset-4 text-[1.2vw] underline decoration-[#004D43]">
            <li>Instagram</li>
            <li>Behance</li>
            <li>Facebook</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
      

      {/* photo and read more section */}
      <div className="w-full flex border-t-[1px] pt-7 border-gray-600 mt-12">
        <div className="w-1/2">
          <h1 className="text-[55.466px]">Our approach:</h1>
          <button className="uppercase text-[18.9333px] items-center mt-3 flex gap-6 px-8 py-3 text-white bg-[#212121] rounded-full">
            Read More
            <div className="bg-white w-2 h-2 rounded-full "></div>
          </button>
        </div>
        <div className="bg-[#a0b552] rounded-2xl">
          <img
            className="h-[30vw] rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
