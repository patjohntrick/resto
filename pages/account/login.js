import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const login = () => {
  const baseUri = "http://localhost:5000";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const inputBox =
    " p-2 py-4 text-black/90 rounded border-[1px] border-black/30 hover:border-black/50 focus:border-[2px] focus:border-green-800 outline-none w-full mt-1 bg-black/0 ";
  const label = " font-semibold text-slate-900/90 ";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userLog = {
      email,
      password,
    };
    const res = await axios.post(`${baseUri}/users/login`, userLog);
    const data = await res.data;
    console.log(data.user);
    if (res.status == 200) {
      localStorage.setItem("token", data.user);
      alert(`Hey thanks to login in Resto. Enjoy!`);
      window.location.href = "/";
      // router.push("/");
    } else {
      alert("Wrong credentials");
    }
  };
  return (
    <section className=" pt-[10vh] bg-black/5 pb-6">
      <div className="img-container">
        <img
          src="/endless-constellation.svg"
          alt=""
          className=" h-[100px] w-full object-cover "
        />
      </div>
      <div className="form-container w-[90%] m-auto ">
        <header>
          <p className=" text-green-800 text-4xl font-medium capitalize pt-8 pb-4">
            login your acount
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4 mb-4 ">
          <div>
            <label htmlFor="email" className={label}>
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputBox}
            />
          </div>
          <div>
            <label htmlFor="password" className={label}>
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputBox}
            />
          </div>
          <div>
            <button
              type="submit"
              className=" w-full text-white bg-green-800 shadow-md hover:shadow-lg transition-all py-4 rounded "
            >
              Login
            </button>
          </div>
        </form>
        <p className=" text-center text-black/70 ">
          Don't have an account?{" "}
          <Link href="/account/register">
            <a className=" text-blue-800 ">Sign up</a>
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default login;
