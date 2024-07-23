import { checklistItems } from "../constants";
import { BadgeCheck } from "lucide-react";

const Workflow = () => {
  return (
    <div id="workflow" className=" container mx-auto mt-10 px-8">
      <div className="conainer   min-h-[800px]">
        <h2 className="text-5xl lg:text-6xl mx-auto w-fit mt-6 mb-12">
          Accelerate your
          <span className="bg-gradient-to-r from-orange-500 to bg-red-800 text-transparent bg-clip-text">
            {" "}
            coding workflow
          </span>
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2 ">
            <img className="" src="/assets/code.jpg" alt="code" />
          </div>
          <div className="w-full lg:w-1/2 mt-2 lg:mt-6">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex  mb-12   ">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 flex justify-center items-center rounded-full">
                  <BadgeCheck />
                </div>
                <div>
                  <div className="text-xl mt-1 mb-2">{item.title}</div>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
