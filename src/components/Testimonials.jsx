import { testimonials } from "../constants";
const Testimonials = () => {
  return (
    <div id="testimonials" className=" container mx-auto mt-10 px-8">
      <div className="  border-b border-neutral-800 min-h-[800px] pb-10 ">
        <h2 className=" flex justify-center text-3xl sm:text-5xl lg:text-6xl tracking-wide text-center mb-10">
          What People are saying{" "}
        </h2>
        <div className="   flex flex-wrap justify-center ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              <div className=" border-neutral-800 rounded-xl border p-10  flex flex-col justify-between">
                <p className="text-lg  flex flex-wrap mb-8">
                  {testimonial.text}
                </p>
                <div className="flex space-x-4 items-center">
                  <img
                    className="w-10 h-10 border rounded-full border-neutral-300 "
                    src={testimonial.image}
                    alt=""
                  />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.user}</h3>
                    <p className="text-sm italic text-neutral-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
