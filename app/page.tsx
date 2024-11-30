"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Divider from "./components/divider";
import TextChanger from "./components/changingtext";
import AlumniTestimonials from "./components/carousel";
// import Sponsor from "./components/sponsor";
import LinkedInSection from "./components/linkedin";
import Link from "next/link";
import React, { useState, useEffect, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  threshold?: number;
}

const ScrollReveal = ({ children, threshold = 0.1 }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return (
    <div
      ref={setRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <div className={styles.backgroundGifContainer}>
        <Image
          src="https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/biabg4-8OH28nxibgRrgcoljfo344JVGl5KVC.gif"
          alt="Background GIF"
          fill
          style={{
            objectFit: "cover",
          }}
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
              {/* <nbsp></nbsp> est.2015 <br /> Replaced this w below */}{" "}
              est.2015 <br />
              <div className={styles.responsivewidth}>
                <span className={styles.text}>
                  We are the premier club for business intelligence & analytics
                  at Singapore Management University{" "}
                </span>
              </div>
            </span>
          </div>
          <Divider />

          <ScrollReveal>
            <div className={styles.cardcontainer}>
              <span className={styles.maintext}>Our Mission</span>
              <br />
              <p className={styles.missiontext}>
                To cultivate a people-centric community that nurtures passion
                for analytics through opportunities, projects, regardless of
                prior expertise or background.
              </p>
            </div>
          </ScrollReveal>

          <Divider />

          <ScrollReveal>
            <div className="relative flex p-2">
              <div className="text-container w-2/3 relative z-10">
                <span className={styles.maintext}>
                  Our Vision for the future
                </span>
                <TextChanger />
                <div className="d-flex flex-nowrap">
                  <button className={styles.button} type="button">
                    <Link href="/WhatWeDo" className={styles.NavLink}>
                      Find Out More
                    </Link>
                  </button>
                  <button className={styles.button} type="button">
                    <a
                      href="https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/prospectus-BwK6FPjMxf1o8v5YOjvux80rSJSqDy.pdf" // Ensure this file is placed in the public/files folder
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
                  src="https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/biapic7-1YgafDPNrOX7PUKej3bd44TjJT5v4L.jpg"
                  alt="Photo 2"
                  width={300}
                  height={200}
                  layout="intrinsic"
                />
              </div>
            </div>
          </ScrollReveal>

          <Divider />

          <ScrollReveal>
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
                  src="https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/biapic2-CKSujqIfzxfHoHCdrWlUtHD3XftCgu.jpg"
                  alt="Photo 1"
                  width={300}
                  height={200}
                  layout="intrinsic"
                />
              </div>
            </div>
          </ScrollReveal>

          <Divider />

          <ScrollReveal>
            <AlumniTestimonials />
          </ScrollReveal>

          <Divider />
          {/* <Sponsor /> */}
          {/* <Divider /> */}

          <ScrollReveal>
            <div className="relative flex flex-col md:flex-row p-2">
              <div className="text-container w-full mb-11 md:mb-0 md:w-1/2 relative z-10 md:pe-5 text-justify md:text-left">
                <span className={styles.longtext}>
                  SMUBIA was established in 2015 by just a few enthusiasts.
                  Today, we have evolved into a large and thriving community.
                </span>
              </div>
              <div className="image-container w-full md:w-1/2 grid place-items-center text-center md:mb-0 mb-3">
                <Link href="/ContactUs">
                  <span className={styles.joinustext}>Join Us Today.</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <Divider />

          <ScrollReveal>
            <LinkedInSection />
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
