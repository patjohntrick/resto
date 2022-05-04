import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Dishes from "../components/Dishes";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
// import jwt_decode from "jwt-decode";

export default function Home() {
  return (
    <>
      <Hero />
      <Dishes />
      <About />
    </>
  );
}
