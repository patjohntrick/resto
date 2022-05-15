import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" py-12 ">
      <div className="footer-container w-[90%] m-auto space-y-6 text-slate-900 lg:grid lg:grid-cols-5 lg:space-y-0 lg:w-[900px] xl:w-[1100px] ">
        <div className="logo-container lg:col-span-2 lg:px-1 ">
          <p className=" capitalize text-2xl font-bold text-slate-900 lg:text-3xl ">
            resto
          </p>
          <p className=" text-black/70 mb-2 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, molestiae.
          </p>
          <div className="div">
            <p className=" text-black/70  ">All rights reserved.</p>
            <p className=" text-black/70    ">
              ©2022 Copyright. Developed by{" "}
              <Link href="https://www.facebook.com/johnpatrick13/">
                <a className=" font-bold text-green-900" target="_blank">
                  PATRICK
                </a>
              </Link>
            </p>
          </div>
        </div>

        <div className="location-container">
          <header className=" text-lg font-semibold text-slate-900 capitalize mb-2 ">
            location
          </header>
          <ul className=" space-y-1 ">
            <li>Manila</li>
            <li>Laguna</li>
            <li>Batangas</li>
            <li>Cebu</li>
          </ul>
        </div>

        <div className="links-container">
          <header className=" text-lg font-semibold text-slate-900 capitalize mb-2 ">
            links
          </header>
          <ul className="links space-y-1">
            <li>
              <Link href="">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Menu</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="info-container">
          <header className=" text-lg font-semibold text-slate-900 capitalize mb-2">
            info
          </header>
          <div className="infos space-y-1">
            <div className="number flex gap-1 items-center text-green-900">
              <BsFillTelephoneFill />{" "}
              <span className=" text-slate-900 ">09566723498</span>
            </div>
            <div className="email flex gap-1 items-center text-green-900 break-all ">
              <MdEmail className="lg:text-3xl" />{" "}
              <span className=" text-slate-900 ">
                patrickjohn.resurreccion18@gmail.com
              </span>
            </div>
            <div className="address flex gap-1 items-center text-green-900 break-all">
              <MdLocationOn className="lg:text-3xl" />{" "}
              <span className=" text-slate-900 ">
                Brgy. Ajos, Catanauan Quezon. 4311
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
