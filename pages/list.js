import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import jwt_decode from "jwt-decode";
import axios from "axios";

// export const getStaticProps = async () => {
//   const token = localStorage.getItem("token");

//   const decode = jwt_decode(token);
//   setUser(decode._id);
// };

const cart = () => {
  const [user, setUser] = useState([]);

  const baseUri = "http://localhost:5000";
  // const getUser = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const decode = jwt_decode(token);
  //     setUserId(decode._id);
  //   }
  // };

  const getList = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = jwt_decode(token);
      const res = await axios.get(`${baseUri}/users/${decode._id}`);
      const data = await res.data;
      setUser(data.cart);
    }
  };
  useEffect(() => {
    // getUser();
    getList();
  }, []);
  console.log(user);
  // console.log(userId);
  return (
    <section className=" pt-[10vh] bg-black/5 ">
      <div className="container w-[90%] m-auto py-6 ">
        <div className="text-container text-4xl text-green-800 font-medium capitalize mb-4">
          my list
        </div>
        <div className="order-container space-y-2">
          <header className=" grid grid-cols-4 font-semibold bg-white py-3 text-center rounded shadow ">
            <p>Food</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Action</p>
          </header>

          <div className="list-container first:rounded-t last:rounded-b">
            {user.map((cart) => {
              if (user.length == 0) {
                return (
                  <div>
                    <p>You don't have order yet.</p>
                    <p>Order now</p>
                  </div>
                );
              } else {
                return (
                  <div key={cart._id}>
                    <div className=" grid grid-cols-4 text-slate-900 text-center text-sm bg-white  shadow py-3 ">
                      <div>
                        <img src="" alt="" className="hidden" />
                        <p>{cart.name}</p>
                      </div>
                      <p>10</p>
                      <p>{cart.price}</p>
                      <p className=" flex justify-center text-red-900 ">
                        <GiCancel />
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}

            {/* {userList.map((user) => {
              return user.cart.map((userCart) => {
                console.log(userCart);
                if (userCart) {
                  return (
                    <div key={userCart._id}>
                      <div className=" grid grid-cols-4 text-slate-900 text-center text-sm bg-white  shadow py-3 ">
                        <div>
                          <img src="" alt="" className="hidden" />
                          <p>{userCart.name}</p>
                        </div>
                        <p>10</p>
                        <p>{userCart.price}</p>
                        <p className=" flex justify-center text-red-900 ">
                          <GiCancel />
                        </p>
                      </div>
                      <hr />
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <p>You don't have order yet.</p>
                      <p>Order now</p>
                    </div>
                  );
                }
              });
            })} */}
            {/* <div className=" grid grid-cols-4 text-slate-900 text-center text-sm bg-white  shadow py-3 ">
              <div>
                <img src="" alt="" className="hidden" />
                <p>name</p>
              </div>
              <p>10</p>
              <p>P999.00</p>
              <p className=" flex justify-center text-red-900 ">
                <GiCancel />
              </p>
            </div>
            <hr />

            <div className=" grid grid-cols-4 text-slate-900 text-center text-sm bg-white  shadow py-3 ">
              <div>
                <img src="" alt="" className="hidden" />
                <p>name</p>
              </div>
              <p>77</p>
              <p>P7777.00</p>
              <p className=" flex justify-center text-red-900 ">
                <GiCancel />
              </p>
            </div>
            <hr />

            <div className=" grid grid-cols-4 text-slate-900 text-center text-sm bg-white  shadow py-3 ">
              <div>
                <img src="" alt="" className="hidden" />
                <p>name</p>
              </div>
              <p>77</p>
              <p>P7777.00</p>
              <p className=" flex justify-center text-red-900 ">
                <GiCancel />
              </p>
            </div>
            <hr /> */}

            {/* <div className=" grid grid-cols-4 text-slate-900 text-center text-sm bg-white  shadow py-3 ">
              <div>
                <img src="" alt="" className="hidden" />
                <p>name</p>
              </div>
              <p>77</p>
              <p>P7777.00</p>
              <p className=" flex justify-center text-red-900 ">
                <GiCancel />
              </p>
            </div>
            <hr /> */}
          </div>
        </div>
        <footer className=" mt-2 ">
          <div className="text-container flex justify-end gap-2 item-center">
            <div className="total flex justify-center gap-1 items-center ">
              <p className=" text-sm font-medium text-slate-900 ">Total:</p>
              <p className=" text-green-900 font-semibold text-xl "> P777.00</p>
            </div>
            <a className=" bg-green-800 text-white px-3 py-2 rounded shadow-md hover:bg-green-900 transition-all ">
              Order now
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default cart;
