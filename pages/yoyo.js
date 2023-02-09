import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";

export default function Yoyo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>It's a Beautiful World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/compsci 49 (1) 1.ico" />

      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>yOYo&apos;s Page : &#41;</h1>
        <img src={"/yoyo.jpg"} width="400" height="400" boarder-radius="10" />
        <p className={styles.red} >@yOYo</p>
      </main>
    </div>
  );
}
