import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdBorderColor } from "react-icons/md";

const shop = () => {
  return (
    <section className=" pt-[10vh] bg-black/5 ">
      <div className="product-container py-6">
        <form action="" className=" relative  w-[90%] m-auto ">
          <input
            type="search"
            placeholder="Search..."
            className=" border-black/40 border-[1px] rounded py-2 pl-10 pr-2 outline-none focus:border-green-900 transition-all w-full placeholder:text-black/60 text-slate-900"
          ></input>
          <div className=" absolute left-[5%] top-[50%] translate-x-[-5%] translate-y-[-50%] text-xl text-black/70 ">
            <BiSearchAlt />
          </div>
        </form>
        <div className="container pt-4 w-[90%] m-auto">
          <div className="box shadow-lg rounded p-4 bg-white">
            <div className="img-container">
              <img
                src="https://i.postimg.cc/0rdgSvt4/menu-1.jpg"
                alt=""
                className=" rounded w-full object-cover"
              />
            </div>
            <div className="text-container text-slate-900 mt-4">
              <p className=" text-green-900 font-semibold text-center ">
                P400.00
              </p>
              <p className=" capitalize text-xl font-semibold text-center ">
                pizzame
              </p>
              <p className=" text-black/70 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="btn flex justify-center gap-4 mt-2 ">
                <a className=" text-green-900 shadow px-3 py-2 capitalize font-medium cursor-pointer hover:shadow-lg ">
                  order now
                </a>
                <a className=" text-green-900 shadow px-3 py-2 capitalize font-medium cursor-pointer hover:shadow-lg">
                  add to list
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default shop;
