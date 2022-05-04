import Link from "next/link";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const handleNavbar = () => {
    setNavBar(!navBar);
  };
  console.log(navBar);
  return (
    <>
      <nav className=" shadow fixed px-4 w-full bg-white z-50 ">
        <div className="nav-container flex justify-between items-center min-h-[10vh]">
          <div className="logo">
            <p>
              <Link href="/">
                <a className=" text-2xl capitalize font-bold text-slate-900">
                  Resto
                </a>
              </Link>
            </p>
          </div>
          {/* desktop-nav */}

          <div className="nav-links-desktop hidden">
            <ul>
              <li>
                <Link href="/">
                  <a>home</a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a>shop</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>contact us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="user-container hidden">
            <ul>
              <li>
                <Link href="/cart">
                  <a>cart</a>
                </Link>
              </li>

              <li>
                <Link href="/login">
                  <a>login</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* mobile-nav */}
          <div
            className="nav-bar text-xl text-green-900"
            onClick={handleNavbar}
          >
            <GoThreeBars />
          </div>
        </div>
      </nav>
      <div
        className={
          "link-container fixed top-[10vh] w-full left-0 h-[90%] overflow-hidden transition-all " +
          (navBar ? " backdrop-blur-sm z-50" : " backdrop-blur-none -z-10")
        }
      >
        <div
          className={
            "links absolute bg-green-800 p-4 top-0 w-[180px] h-full text-right uppercase transition-all " +
            (navBar ? "right-0" : "right-[-70%]")
          }
        >
          <div className="nav-links-mobile">
            <ul className=" space-y-4 text-white" onClick={handleNavbar}>
              <li>
                <Link href="/">
                  <a>home</a>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <a>menu</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>contact us</a>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <a>cart</a>
                </Link>
              </li>

              <li>
                <Link href="/login">
                  <a>login</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
