import Footer from "./Footer";
import Navbar from "./Navbar";

const NavFoot = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default NavFoot;
