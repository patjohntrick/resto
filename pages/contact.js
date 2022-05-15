import React, { useState } from "react";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(false);
  const inputBox =
    " p-2 py-4 text-black/90 rounded border-[1px] border-black/30 hover:border-black/50 focus:border-[2px] focus:border-green-800 outline-none w-full mt-1 bg-black/0 ";
  const label = " font-semibold text-slate-900/90 ";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      alert("Your message has been sent.");
      setSend(false);
    }, 3000);
  };
  return (
    <section className=" pt-[10vh] bg-black/5 pb-6 lg:pb-0 ">
      <div className=" lg:flex lg:justify-center lg:items-start">
        <div className="img-container order-2 lg:w-[80%]">
          <img
            src="/endless-constellation.svg"
            alt=""
            className=" h-[100px] w-full object-cover lg:h-screen "
          />
        </div>
        <div className="form-container w-[90%] m-auto md:w-[60%] lg:m-0 ">
          <header>
            <p className=" text-green-800 text-4xl font-medium capitalize pt-8 pb-4 md:text-center ">
              Feel free to message us
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-4 mb-4 lg:p-4">
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
              <label htmlFor="message" className={label}>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputBox} lg:h-[150px]`}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className=" w-full text-white bg-green-800 shadow-md hover:shadow-lg transition-all py-4 rounded "
              >
                {send ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default contact;
