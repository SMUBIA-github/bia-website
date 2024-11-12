"use client";
import { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import styles from "./linkedin.module.css";

const LinkedInSection = () => {
  // Ensure Bootstrap JS is properly loaded for the carousel to function
  useEffect(() => {
    if (typeof document !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <div className="bg-black text-white flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col md:w-1/2 w-full md:pr-6 items-center text-center md:text-left">
          <span className={`${styles.maintext} font-bold mb-0 md:mb-4`}>
            Learn more about us on LinkedIn
          </span>
          <button className={styles.button} type="button">
            <a href="https://www.linkedin.com/company/13402601/">Connect</a>
          </button>
        </div>

        {/* Right Section (Carousel) */}
        <div className="md:w-1/2 w-full md:pl-6">
          <div
            id="linkedinCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src="/images/biapic1.jpg"
                  className="d-block w-100 rounded-lg"
                  alt="LinkedIn Post 1"
                  width={300}
                  height={200}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src="/images/biapic3.jpg"
                  className="d-block w-100 rounded-lg"
                  alt="LinkedIn Post 2"
                  width={300}
                  height={200}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src="/images/biapic4.jpg"
                  className="d-block w-100 rounded-lg"
                  alt="LinkedIn Post 2"
                  width={300}
                  height={200}
                />
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#linkedinCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#linkedinCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bootstrap JS */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
    </div>
  );
};

export default LinkedInSection;
