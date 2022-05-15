import { about } from "./data";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <section className=" py-12 ">
      <div className="about-container w-[90%] m-auto ">
        <div className="text-container text-center mb-6">
          <p className=" text-green-900 uppercase font-semibold">about us</p>
          <p className=" text-slate-900 font-bold uppercase text-xl ">
            why choose us?
          </p>
        </div>
        <div className="content-container lg:w-[900px] lg:m-auto xl:w-[1100px]">
          {about.map((about) => {
            return (
              <div
                className="container md:flex md:justify-center md:items-center "
                key={about.id}
              >
                <div className="img-container">
                  <img src={about.image} alt="" />
                </div>
                <div className="text-container space-y-2 md:w-[180%] lg:w-[120%]">
                  <p className=" text-2xl uppercase font-semibold text-slate-900 text-center md:text-left ">
                    {about.title}
                  </p>
                  <p className=" text-black/70 text-justify md:text-left ">
                    {about.paragraph}
                  </p>
                  <div className="link grid grid-cols-2 gap-2 ">
                    <div className=" bg-black/10 flex items-center justify-center px-4 py-3 text-green-900 gap-1 text-lg rounded shadow-sm ">
                      <FaShippingFast />{" "}
                      <span className=" text-slate-900 capitalize font-medium text-sm ">
                        delivery
                      </span>
                    </div>
                    <div className=" bg-black/10 flex items-center justify-center px-4 py-3 text-green-900 gap-1 text-lg rounded shadow-sm ">
                      <MdOutlinePayments />{" "}
                      <span className=" text-slate-900 capitalize font-medium text-sm ">
                        payment
                      </span>
                    </div>
                    <div className=" bg-black/10 flex items-center justify-center px-4 py-3 text-green-900 gap-1 text-lg rounded col-span-2 shadow-sm ">
                      <BiSupport />{" "}
                      <span className=" text-slate-900 capitalize font-medium text-sm ">
                        support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
