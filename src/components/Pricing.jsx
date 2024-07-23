import { pricingOptions } from "../constants";
import { BadgeCheck } from "lucide-react";

const Pricing = () => {
  return (
    <div id="pricing" className="  container mx-auto  mt-10 px-8">
      <div className="min-h-[800px]">
        <h2 className=" flex justify-center text-3xl sm:text-5xl lg:text-6xl tracking-wide">
          Pricing
        </h2>
        <div className="flex flex-wrap mt-14 ">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              <div className=" border-neutral-700 rounded-xl border p-10  flex flex-col justify-between">
                <p className="text-4xl  flex flex-wrap">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text  ml-2 text-sm tracking-tight ">
                      Most Popular
                    </span>
                  )}
                </p>
                <p className="text-5xl mt-6 mr-2">
                  {option.price}{" "}
                  <span className="text-neutral-400 tracking-tight text-base">
                    /month
                  </span>
                </p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <BadgeCheck />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-20 border border-orange-900 rounded-lg transition duration-200 py-2 text-xl text-center  hover:bg-orange-900 ">
                  <a href="#">Subscibe</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
