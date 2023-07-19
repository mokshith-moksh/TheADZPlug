import React from "react";
import mob from "/assets/top-3.png";
import Wave from "react-wavify";
import top from "/assets/wave-top.png";


const Home = () => {
  return (
    <div className="relative w-[100vw] h-[100vh] items-center justify-between bg-[#010323]  overflow-hidden">
    
      <div className=" w-[80vw] h-[60vh] mx-auto flex flex-col-reverse md:flex-row-reverse mt-[20vh] md:mt-[10vh]">
        <div className="w-[100%] flex justify-center items-center  animate-trans-bottom ">
          <img src={mob} alt="" className=" z-50" />
        </div>

        <div className="w-[100%] pb-8 flex flex-col justify-center md:items-start z-50 ">
          <div className=" text-white font-extrabold text-4xl mb-10 flex flex-col justify-center items-center animate-trans-left">
            Discover.Connect.
            <div className="md:mr-24">Collaborate.</div>
          </div>
          <div className=" text-gray-300 text-lg  w-[108%]  -ml-4 flex flex-col md:flex-row md:gap-1 justify-center items-center mb-8 md:translate-x-24 animate-trans-left xl:-ml-48">
            An ecosystem for Social media Influencers and
            <div className="text-gray-300 ">Brands</div>
          </div>

          <div className=" flex flex-col md:flex-row gap-12 w-full">
            <button className=" bg-[#1cdb7f] p-4 rounded-xl w-[100%] md:w-[40%] animate-trans-bottom  ">
              I'M AN INFLUENCER
            </button>
            <button className=" bg-[#1cdb7f] p-4 rounded-xl w-[100%] md:w-[40%]  animate-trans-bottom">
              I'M A BRAND
            </button>
          </div>
        </div>
        <div>
          <img
            src={top}
            alt=""
            className="absolute h-10  translate-y-[88vh]  -translate-x-[10vw]  md:translate-y-[80vh] md:-translate-x-[10vw] md:h-24 xl:w-full z-50"
          />
        </div>
        <div className="z-50">
          <Wave
            fill="#ffffff"
            paused={false}
            options={{
              height: 6,
              amplitude: 20,
              speed: 0.3,
              points: 3,
            }}
            className="mt-[70vh]  pt-10 md:h-[30vh] opacity-40 -translate-x-10 translate-y-20 absolute w-[100vw] md:-translate-x-36 md:translate-y-4 xl:-translate-x-[10vw]"
          />
                  <Wave
            fill="#ffffff"
            paused={false}
            options={{
              height: 7,
              amplitude: 20,
              speed: 0.3,
              points: 4,
            }}
            className="mt-[70vh]  pt-10 md:h-[30vh] opacity-60 -translate-x-10 translate-y-20 absolute w-[100vw] md:-translate-x-36 md:translate-y-4 xl:-translate-x-[10vw]"
          />
        </div>
      </div>
      <div className="z-50">
        <Wave
          fill="#ffffff"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.4,
            points: 4,
          }}
          className=" mt-24 pt-10 h-[20vh] opacity-70 -translate-y-9 md:translate-y-5"
        />
      </div>
    </div>
  );
};

export default Home;
