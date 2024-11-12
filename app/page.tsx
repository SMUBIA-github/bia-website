import Image from "next/image";
import styles from "./page.module.css";
import Divider from "./components/divider";
import TextChanger from "./components/changingtext";
import AlumniTestimonials from "./components/carousel";
import Sponsor from "./components/sponsor";
import LinkedInSection from "./components/linkedin";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className={styles.backgroundGifContainer}>
        <Image
          src="/images/BIABG4.gif"
          alt="Background GIF"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/images/BIGABG4.mp4" type="video/mp4" />
        </video> */}
      </div>

      <div className={styles.whowearecontainer}>
        <div className={styles.contentContainer}>
          <div className={styles.taglinecontainer}>
            <span className={styles.tagline}>
              Business Intelligence
              <br /> & Analytics Club
            </span>
            <span className={styles.taglinetext}>
              <nbsp></nbsp> est.2015 <br />
              <div className={styles.responsivewidth}>
                <span className={styles.text}>
                  We are the premier club for business intelligence & analytics
                  at Singapore Management University{" "}
                </span>
              </div>
            </span>
          </div>
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
            <div className="text-container w-2/3 relative z-10">
              <span className={styles.maintext}>Our Vision for the future</span>
              <TextChanger />
              <div className="d-flex flex-nowrap">
                <button className={styles.button} type="button">
                  <Link href="/WhatWeDo" className={styles.NavLink}>
                    Find Out More
                  </Link>
                </button>
                <button className={styles.button} type="button">
                  <a
                    href="/files/SMUBIA.Prospectus.pdf" // Ensure this file is placed in the public/files folder
                    download
                    className={styles.link}
                  >
                    Prospectus
                  </a>
                </button>
              </div>
            </div>
            <div className="image-container w-1/3 flex justify-end">
              <Image
                className={styles.image1}
                src="/images/biapic7.jpg"
                alt="Photo 2"
                width={300}
                height={200}
                layout="intrinsic"
              />
            </div>
          </div>

          <Divider />

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
                src="/images/biapic2.jpg"
                alt="Photo 1"
                width={500}
                height={300}
              />
            </div>
          </div>

          <Divider />

          <AlumniTestimonials />
          <Divider />
          {/* <Sponsor /> */}
          {/* <Divider /> */}
          <div className="relative flex flex-col md:flex-row p-2">
            <div className="text-container w-full md:w-1/2 relative z-10 md:pe-5 text-justify md:text-left">
              <span className={styles.longtext}>
                SMUBIA was established in 2015 by just a few enthusiasts. Today,
                we have evolved into a large and thriving community.
              </span>
            </div>
            <div className="image-container w-full md:w-1/2 grid grid-rows-2 gap-2 mt-4 md:mt-0 text-center">
              <div className="bluebrown">
                <span className={styles.joinustext}>Join Us Today.</span>
              </div>
              <div className="flex justify-center gap-2 mt-2">
                {/* <button className={styles.button} type="button">
                  Find Out More
                </button> */}
                <button className={styles.button} type="button">
                  <Link href="/ContactUs" className={styles.NavLink}>
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <Divider />
          <LinkedInSection />
        </div>
      </div>
    </main>
  );
}
