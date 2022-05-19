import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useRouter } from "next/router";

const baseUri = "https://restofood.herokuapp.com";

export const getStaticPaths = async () => {
  const res = await fetch(`${baseUri}/products`);
  const data = await res.json();

  const paths = data.map((data) => {
    return {
      params: { id: data._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`${baseUri}/products/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

const Dish = ({ data }) => {
  const [order, setOrder] = useState(1);
  const [shipDropDown, setShipDropDown] = useState(false);
  const [deliverDropDown, setDeliverDropDown] = useState(false);
  const [user, setUser] = useState("");
  const router = useRouter();

  const getUser = () => {
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    setUser(decode._id);
    console.log(decode);
  };

  const addToList = async (e) => {
    const newList = {
      _id: data._id,
      name: data.name,
      price: data.price * order,
      quantity: order,
      image: data.image,
      description: data.description,
    };
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to login first!");
      router.push("/account/login");
    } else {
      const res = await axios.post(`${baseUri}/users/${user}/list`, newList);
      const resData = await res.data;
      alert("Added to list.");
      router.push("/menu");
    }
    // console.log(resData);
  };
  // console.log(newList);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser();
    }
  }, []);

  return (
    <section className=" pt-[10vh] bg-black/5 pb-6 ">
      <div className="single-menu-container mt-6 w-[90%] m-auto phone:w-[80%] md:w-[60%] lg:w-[700px] ">
        <header className=" flex items-center capitalize mb-4 lg:w-[80%] lg:m-auto lg:mb-4 ">
          <Link href={`/menu`}>
            <a className=" text-green-900 cursor-pointer ">{`back to menu`}</a>
          </Link>
          <p className="px-2">{`|`}</p>
          <p>{data.name}</p>
        </header>
        <div className="menu-container ">
          <div className="img-container lg:grid lg:place-items-center ">
            <img
              src={data.image}
              alt=""
              className=" w-full rounded lg:w-[300px] object-cover "
            />
          </div>
          <div className="text-container space-y-2 lg:w-[80%] lg:m-auto ">
            <div className="header mt-2 ">
              <p className=" capitalize text-slate-900 font-semibold text-2xl lg:text-center ">
                {data.name}
              </p>
              <p className=" font-semibold text-green-800 lg:text-center ">{`P${data.price}.00`}</p>
              <p className=" text-black/70 text-justify ">{data.description}</p>
            </div>

            <div className="order">
              <p className=" font-semibold text-slate-900 text-lg ">Order</p>
              <div className="btn flex ">
                <button
                  className={
                    " px-2  text-lg border-[1px] border-black/10 relative" +
                    (order <= 1 ? " text-black/50 -z-10" : " text-black z-10")
                  }
                  onClick={() => setOrder(order - 1)}
                >
                  <div
                    className={
                      "disbler absolute w-full h-full left-0 " +
                      (order <= 1 ? "z-10 bg-black/20" : " -z-10 bg-none")
                    }
                  ></div>
                  -
                </button>
                <p className="  font-medium text-slate-900 px-3 border-t-[1px] border-b-[1px] border-black/10 ">
                  {order}
                </p>
                <button
                  className="px-2 text-lg border-[1px] border-black/10"
                  onClick={() => setOrder(order + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="order-record flex justify-between">
              <div className=" flex gap-2">
                <p className=" text-black/70 font-medium capitalize ">
                  {data.name}
                </p>
                <p className=" font-semibold text-black/90 ">{`x`}</p>
                <p className=" font-semibold text-black/90 "> {order} </p>
              </div>
              <p className=" font-medium text-black/90 ">{`P${
                data.price * order
              }.00`}</p>
            </div>
            <hr />
            <div className="btn">
              {/* <p className=" bg-green-800 text-white font-medium text-sm px-3 py-3 curso-pointer w-[50%] text-center capitalize shadow-md hover:shadow-lg transition-all rounded order-1 hover:bg-green-900 ">
                order now
              </p> */}
              <p
                className=" text-green-900 bg-white font-medium text-sm px-3 py-3 cursor-pointer capitalize text-center shadow-md hover:shadow-lg transition-all rounded hover:bg-green-900 hover:text-white  "
                onClick={addToList}
              >
                add to list
              </p>
            </div>

            <div className="features-container pt-4 space-y-2">
              <div className="shipping-container shadow-sm bg-white rounded">
                <div
                  className=" shadow-sm shipping flex items-center justify-between p-1"
                  onClick={() => setShipDropDown(!shipDropDown)}
                >
                  <div className="  flex items-center justify-center text-green-900 gap-1 text-base font-semibold p-2 ">
                    <FaShippingFast />{" "}
                    <span className=" text-slate-900 capitalize font-medium ">
                      free deliver
                    </span>
                  </div>
                  <div
                    className={
                      shipDropDown
                        ? " relative translate-y-0 rotate-0 icon text-[7px] text-slate-900 transition-all pr-2"
                        : "relative translate-y-[3px] -translate-x-[1px] rotate-45 icon text-[7px] text-slate-900 transition-all pr-2"
                    }
                  >
                    <ImCross />
                  </div>
                </div>
                <p
                  className={
                    shipDropDown == true
                      ? "block px-3 py-2 text-black/70"
                      : "hidden"
                  }
                >
                  Free shipping on orders above{" "}
                  <span className="font-semibold">PHP 1,000</span>. We deliver
                  your food order via our partner courrier, cash on delivery.
                </p>
              </div>

              <div className="deliver-container bg-white shadow-sm rounded">
                <div
                  className="deliver shadow-sm flex items-center justify-between p-1"
                  onClick={() => setDeliverDropDown(!deliverDropDown)}
                >
                  <div className=" flex items-center justify-center text-green-900 gap-1 font-semibold p-2 text-sm ">
                    <BsFillCalendarCheckFill />{" "}
                    <span className=" text-slate-900 capitalize font-medium text-base ">
                      Same day delivery
                    </span>
                  </div>
                  <div
                    className={
                      deliverDropDown
                        ? " relative translate-y-0 rotate-0 icon text-[7px] text-slate-900 transition-all pr-2"
                        : "relative translate-y-[3px] -translate-x-[1px] rotate-45 icon text-[7px] text-slate-900 transition-all pr-2"
                    }
                  >
                    <ImCross />
                  </div>
                </div>
                <p
                  className={
                    deliverDropDown == true
                      ? "block px-3 py-2 text-black/70"
                      : "hidden"
                  }
                >
                  Same Day Delivery: For cities Makati, Pasay, Mandaluyong and
                  Manila. Same/Next Day Delivery (Order on Mon-Sat) is ongoing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dish;
