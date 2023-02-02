import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";

export default function Jack() {
<<<<<<< Updated upstream
  return (
    <div className={styles.container}>
      <Head>
        <title>CS49 Personal Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/compsci 49 (1) 1.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Jack&apos;s Page : &#41;</h1>
      </main>
    </div>
  );
=======
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const [fontSize, setFontSize] = useState(20);
    const [fontDirection, setFontDirection] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndex((colorIndex + 1) % colors.length);
        }, 5);
        return () => clearInterval(intervalId);
    }, [colorIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (fontSize >= 40) {
                setFontDirection(-1);
            } else if (fontSize <= 10) {
                setFontDirection(1);
            }
            setFontSize(fontSize + fontDirection);
        }, 50);
        return () => clearInterval(intervalId);
    }, [fontSize]);

    return (
        <div className={styles.container} style={{ backgroundColor: colors[colorIndex] }}>
            <Head>
                <title>CS49 Personal Page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/compsci 49 (1) 1.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <div
                    style={{
                        fontFamily: "Comic Sans",
                        fontWeight: 550,
                        fontSize: `${fontSize}px`,
                    }}
                >
                    I'm Jack and I really hope you don't have epilepsy
                </div>
            </main>
        </div>
    );

>>>>>>> Stashed changes
}
