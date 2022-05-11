import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdBorderColor } from "react-icons/md";
import Link from "next/link";

const baseUri = "http://localhost:5000";

export const getStaticProps = async () => {
  const fetchProducts = await fetch(`${baseUri}/products`);
  const data = await fetchProducts.json();

  return {
    props: { products: data },
  };
};

const menu = ({ products }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };
  return (
    <section className=" pt-[10vh] bg-black/5 ">
      <div className="product-container py-6">
        <form onSubmit={handleSubmit} className=" relative  w-[90%] m-auto ">
          <input
            type="search"
            placeholder="Search..."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" p-2 py-4 pl-11 text-black/90 rounded border-[1px] border-black/30 hover:border-black/50 focus:border-[2px] focus:border-green-800 outline-none w-full mt-1 bg-black/0"
          ></input>
          <div className=" absolute left-[5%] top-[50%] translate-x-[-5%] translate-y-[-50%] text-2xl text-black/70 ">
            <BiSearchAlt />
          </div>
        </form>
        <div className="container pt-4 w-[90%] m-auto space-y-6">
          {products.map((product) => {
            return (
              <Link href={`/menu/${product._id}`} key={product._id}>
                <div className="box shadow-lg rounded p-4 bg-white relative z-10">
                  <div className="img-container">
                    <img
                      src={product.image}
                      alt=""
                      className=" rounded w-full object-cover"
                    />
                  </div>
                  <div className="text-container text-slate-900 mt-4">
                    <p className=" text-green-900 font-semibold text-center ">
                      {`P${product.price}.00`}
                    </p>
                    <p className=" capitalize text-xl font-semibold text-center ">
                      {product.name}
                    </p>
                    <p className=" text-black/70 text-justify">
                      {product.description.slice(0, 70)}
                    </p>
                    {/* <div className="btn flex justify-center gap-4 mt-2 relative z-20">
                    <a className=" text-green-900 shadow px-3 py-2 capitalize font-medium cursor-pointer hover:shadow-lg ">
                      order now
                    </a>
                    <a className=" text-green-900 shadow px-3 py-2 capitalize font-medium cursor-pointer hover:shadow-lg">
                      add to list
                    </a>
                  </div> */}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default menu;
