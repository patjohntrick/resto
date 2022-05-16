import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Cart = () => {
  const [user, setUser] = useState([]);

  const baseUri = "http://localhost:5000";

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
    getList();
  }, []);

  const removeList = async (listId) => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = jwt_decode(token);
      const res = await axios.put(
        `${baseUri}/users/${decode._id}/delete/${listId}`
      );
      const data = await res.data;
      setUser(data.cart);
    }
  };
  console.log(user);
  return (
    <section className=" pt-[10vh] bg-black/5 ">
      <div className="container w-[90%] m-auto py-6 lg:w-[800px] xl:w-[1000px] ">
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
              // const total = cart.price.reduce((a, b) => a + b);
              // console.log(total);
              const totalArray = [cart.price];
              console.log(totalArray);
              if (user == 0) {
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
                        <p className=" capitalize ">{cart.name}</p>
                      </div>
                      <p>{cart.quantity}</p>
                      <p>{`P${cart.price}.00`}</p>
                      <p
                        className=" flex justify-center text-red-900 cursor-pointer "
                        onClick={() => removeList(cart._id)}
                      >
                        <GiCancel />
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <footer className=" mt-2 ">
          <div className="text-container flex justify-end gap-2 item-center">
            <div className="total flex justify-center gap-1 items-center ">
              {/* <p className=" text-sm font-medium text-slate-900 ">Total:</p>
              <p className=" text-green-900 font-semibold text-xl ">
                {user.map((cart) => `${cart.price + cart.price}`)}
              </p> */}
            </div>
            <a className=" bg-green-800 text-white px-3 py-2 rounded shadow-md hover:bg-green-900 transition-all cursor-pointer ">
              Order now
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Cart;
