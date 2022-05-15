import Link from "next/link";
import { dishes } from "./data.js";

const Dishes = () => {
  return (
    <section className="bg-black/5 py-12 ">
      <div className="text-container text-center mb-6">
        <p className=" text-green-900 uppercase font-semibold">dishes</p>
        <p className=" text-slate-900 font-bold capitalize text-xl ">
          our best selling dishes
        </p>
      </div>
      <div className="dish-container space-y-6 md:flex md:flex-wrap md:justify-center md:items-center md:gap-8 md:space-y-0 md:w-[640px] md:m-auto xl:w-[980px]">
        {dishes.map((dish) => {
          return (
            <div
              className="box bg-white w-[90%] m-auto text-center rounded shadow-md pt-6 pb-8 space-y-4 capitalize hover:shadow-xl transition-all phone:w-[80%] md:w-[300px] md:h-[300px] md:space-y-0 "
              key={dish.id}
            >
              <div className="img-container grid place-items-center">
                <img src={dish.image} alt="" className=" w-[190px]" />
              </div>
              <div className="text-container">
                <p className=" text-green-800 font-semibold ">{dish.price}</p>
                <p className=" text-xl font-semibold text-slate-900 ">
                  {dish.title}
                </p>
                <div className=" pt-3 ">
                  <Link href="/menu">
                    <a className="text-green-800 bg-white text-sm font-medium uppercase py-3 px-4 rounded shadow-md hover:shadow-lg transition-all hover:bg-green-100 cursor-pointer">
                      {dish.link}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dishes;
