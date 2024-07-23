import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div id="features" className=" container mx-auto pt-16  mt-20 px-8">
      <div className=" border-b border-neutral-800 min-h-[800px]">
        <div className="bg-neutral-900 text-orange-500 rounded-full mx-auto w-fit py-2 px-3">
          FEATURE
        </div>
        <h2 className="text-5xl lg:text-6xl mx-auto w-fit mt-6">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to bg-red-800 text-transparent bg-clip-text">
            {" "}
            your code{" "}
          </span>
        </h2>
        <div className="flex  mt-10 lg:mt-20 flex-wrap">
          {features.map((feature, index) => (
            <div key={index} className="flex w-full sm:w-1/2 lg:w-1/3">
              <div className=" flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full ">
                {feature.icon}
              </div>
              <div>
                <div className="mb-4 text-xl ">{feature.text}</div>
                <p className=" mb-20 text-md p-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
