import Navbar from "./Navbar";

const NavFoot = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default NavFoot;
