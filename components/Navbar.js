import Link from "next/link";
import { useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import jwt_decode from "jwt-decode";
import { AiOutlineDown } from "react-icons/ai";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [navBar, setNavBar] = useState(false);
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState(false);

  const handleNavbar = () => {
    setNavBar(!navBar);
  };

  const isLog = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = jwt_decode(token);
      setUser(decode);
    }
  };
  // console.log(user);
  const removeToken = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    // router.push("/");
    setNavBar(!navBar);
  };

  const handleProfile = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    isLog();
  }, []);
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
            "links absolute bg-green-50 text-slate-900 p-4 top-0 w-[180px] h-full text-right uppercase transition-all " +
            (navBar ? "right-0" : "right-[-70%]")
          }
        >
          <div className="nav-links-mobile space-y-6 capitalize">
            <ul className=" text-green-800 ">
              <li
                className={user.name ? "hidden" : "block text-xl font-medium"}
                onClick={handleNavbar}
              >
                <Link href="/account/login">
                  <a>login</a>
                </Link>
              </li>
              <li
                className={user.name ? "block text-xl font-medium" : "hidden"}
              >
                <div
                  className=" flex justify-between items-center mb-1 "
                  onClick={handleProfile}
                >
                  <p
                    className={
                      profile
                        ? " relative rotate-180 -translate-x-2 icon text-[10px] text-slate-900 transition-all pr-2 "
                        : "relative rotate-0 icon text-[10px] text-slate-900 transition-all pr-2"
                    }
                  >
                    <AiOutlineDown />
                  </p>
                  <p>{user.name}</p>
                </div>
                <div className={profile ? "block text-sm" : "hidden"}>
                  <div onClick={handleNavbar}>
                    <Link href="/list">
                      <a> list</a>
                    </Link>
                  </div>
                  <div onClick={removeToken}>
                    <Link href="/">
                      <a>logout</a>
                    </Link>
                  </div>
                </div>
              </li>
              <hr />
            </ul>
            <ul className=" space-y-2 font-medium " onClick={handleNavbar}>
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
