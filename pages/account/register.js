import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const register = () => {
  const router = useRouter();
  const inputBox =
    " p-2 py-4 text-black/90 rounded border-[1px] border-black/30 hover:border-black/50 focus:border-[2px] focus:border-green-800 outline-none w-full mt-1 bg-black/0 ";
  const label = " font-semibold text-slate-900/90 ";

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const baseUri = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      number,
      email,
      password,
    };
    const res = await axios.post(`${baseUri}/users/register`, newUser);
    const data = await res.data;
    alert("Successfully register.");
    window.location.href = "/account/login";
    // router.push("/account/login");
    console.log(data);
    // console.log(newUser);
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
            create your account
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4 mb-4">
          <div>
            <label htmlFor="name" className={label}>
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputBox}
            />
          </div>
          <div>
            <label htmlFor="number" className={label}>
              Phone Number
            </label>
            <br />
            <input
              type="number"
              name="number"
              required
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={inputBox}
            />
          </div>
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
            <input type="checkbox" required id="checkBox" className=" mr-2" />
            <label htmlFor="chechBox" className=" text-black/70 ">
              I accept the{" "}
              <span className="text-blue-800">Privacy Policy </span> and{" "}
              <span className="text-blue-800">Terms of Service</span>.
            </label>
          </div>
          <div>
            <button
              type="submit"
              className=" w-full text-white bg-green-800 shadow-md hover:shadow-lg transition-all py-4 rounded "
            >
              Register
            </button>
          </div>
        </form>
        <p className=" text-center text-black/70 ">
          Already have an account?{" "}
          <Link href="/account/login">
            <a className=" text-blue-800 ">Login here</a>
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default register;
