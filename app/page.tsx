import Image from "next/image";
import styles from "./page.module.css";
import Divider from "./components/divider";
import TextChanger from "./components/changingtext";
import AlumniTestimonials from "./components/carousel";
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

          <div className="relative flex p-2">
            <div className="text-container w-1/2 relative z-10">
              <span className={styles.maintext}>Our Vision for the future</span>
              <TextChanger />
              <button className={styles.button} type="button">
                Find Out More
              </button>
              <button className={styles.button} type="button">
                Contact Us
              </button>
            </div>
            <div className="image-container w-1/2 flex justify-end">
              <Image
                className={styles.image1}
                src="/images/photo2.jpg"
                alt="Photo 2"
                width={300} // Adjust width as needed
                height={200} // Adjust height as needed
                layout="intrinsic" // Change layout for fixed size
              />
            </div>
          </div>

          <Divider></Divider>

          <div className="relative flex p-2">
            <div className="text-container w-1/2 relative z-10">
              <span className={styles.maintext}>Our Reach</span>
              <p className={styles.reachtext}>
                We have grown to over 2000++ members
              </p>

              <div className={styles.reachContainer}>
                <span className={styles.hoverText}>See Our Reach</span>
                <div className={styles.expandedText}>
                  <p>Our growth is at 400 members every year</p>
                  <p>Instagram: &gt;1000 followers</p>
                  <p>Telegram: &gt;2000 followers</p>
                  <p>LinkedIn: &gt;700 followers</p>
                  <p>Connect with our network today.</p>
                </div>
              </div>
            </div>

            <div className="image-container w-1/2 flex justify-end">
              <Image
                className={styles.image1}
                src="/images/photo1.jpg" // Correct path (relative to the 'public' folder)
                alt="Photo 1"
                width={500} // Set the appropriate width
                height={300} // Set the appropriate height
              />
            </div>
          </div>
        </div>
      </div>

      <Divider></Divider>

      <AlumniTestimonials />

      <Divider></Divider>
    </main>
  );
}
