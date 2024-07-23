const HeroSection = () => {
  return (
    <div id="hero" className=" container mx-auto pt-16 px-14">
      <div className="  flex flex-col items-center  mt-6 lg:mt-20 ">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            for developers
          </span>{" "}
        </h1>{" "}
        <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="flex justify-center my-10 space-x-6">
          <a
            href=""
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md"
          >
            Start for free{" "}
          </a>
          <a
            href=""
            className="flex justify-center items-center py-3 px-4 border rounded-md "
          >
            Documentation{" "}
          </a>
        </div>
        <div className="flex justify-center mt-10 w-full">
          <video
            autoPlay
            muted
            loop
            className="rounded-md w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src="/assets/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag
          </video>
          <video
            autoPlay
            muted
            loop
            className="rounded-md w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src="/assets/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
