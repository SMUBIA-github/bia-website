import Image from "next/image";
import styles from "./page.module.css";
import Divider from "./components/divider";
import TextChanger from "./components/changingtext";
// import Navbar from './components/nav'

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <h1>Home</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <span className={styles.tagline}>
            Business Intelligence
            <br /> & Analytics Club
          </span>
          <span className={styles.taglinetext}>
            <nbsp></nbsp> est.2015
            <br />
            <span className={styles.text}>
              We are the premier club for business intelligence & analytics
              <span className={styles.breakline}>
                at Singapore Management University{" "}
              </span>
            </span>
          </span>
          <Divider />
          <div className={styles.cardcontainer}>
            <span className={styles.maintext}>Our Mission</span>
            <br />
            <p className={styles.missiontext}>
              To cultivate a people-centric community that nurtures passion for
              analytics through opportunities, projects, regardless of prior
              expertise or background.
            </p>
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2">
              <span className={styles.maintext}>Our Vision for the future</span>
              <TextChanger></TextChanger>
              <button className={styles.button} type="button">
                Find Out More
              </button>
              <button className={styles.button} type="button">
                Contact Us
              </button>
            </div>
            <div>
              <Image
                src="/static/images/photo1.jpg" // Correct path (relative to the 'public' folder)
                alt="Photo 1"
                width={500} // Set the appropriate width
                height={300} // Set the appropriate height
              />
            </div>
          </div>
          <Divider></Divider>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className={styles.maintext}>Our Reach</span>
            </div>
            <div>
              <Image
                src="/static/images/photo1.jpg" // Correct path (relative to the 'public' folder)
                alt="Photo 1"
                width={500} // Set the appropriate width
                height={300} // Set the appropriate height
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
