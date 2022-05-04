import NavFoot from "../components/NavFoot";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NavFoot>
      <Component {...pageProps} />
    </NavFoot>
  );
}

export default MyApp;
