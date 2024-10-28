import React from "react";
import Image from "next/image"; // Note that "Image" should be lowercase in the import.
import styles from "./sponsor.module.css";
import Divider from "./divider";

const Sponsor = () => {
  return (
    <div className="container mx-auto text-center">
      <div>
        <span className={styles.plattext}>Partners</span>
      </div>
      <div className="flex my-4">
        {" "}
        <div className="w-1/4 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 3"
            width={500}
            height={300}
          />
        </div>
      </div>
      <Divider />
      <div>
        <span className={styles.plattext}>Platinum Sponsors</span>
      </div>
      <div className="flex my-4 justify-center">
        {/* First row with three images */}
        <div className="w-1/3 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 2"
            width={500}
            height={300}
          />
        </div>
        <div className="w-1/3 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 3"
            width={500}
            height={300}
          />
        </div>
      </div>
      <div>
        <span className={styles.goldtext}>Gold Sponsors</span>
      </div>
      <div className="flex my-4">
        {/* Second row with four images */}
        <div className="w-1/3 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 4"
            width={400}
            height={250}
          />
        </div>
        <div className="w-1/3 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 5"
            width={400}
            height={250}
          />
        </div>
        <div className="w-1/3 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 6"
            width={400}
            height={250}
          />
        </div>
      </div>
      <div>
        <span className={styles.silvertext}>Silver Sponsors</span>
      </div>
      <div className="flex my-4">
        {/* Second row with four images */}
        <div className="w-1/4 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 4"
            width={400}
            height={250}
          />
        </div>
        <div className="w-1/4 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 5"
            width={400}
            height={250}
          />
        </div>
        <div className="w-1/4 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 6"
            width={400}
            height={250}
          />
        </div>
        <div className="w-1/4 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 6"
            width={400}
            height={250}
          />
        </div>
      </div>
      <div>
        <span className={styles.bronzetext}>Bronze Sponsors</span>
      </div>
      <div className="flex my-4">
        {/* Second row with four images */}
        <div className="w-1/5 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 4"
            width={400}
            height={250}
          />
        </div>
        <div className="w-1/5 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 5"
            width={400}
            height={250}
          />
        </div>
        <div className="w-1/5 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 6"
            width={400}
            height={250}
          />
        </div>
        <div className="w-1/5 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 6"
            width={400}
            height={250}
          />
        </div>
        <div className="w-1/5 flex justify-center">
          <Image
            className={styles.image1}
            src="/images/photo1.jpg"
            alt="Photo 6"
            width={400}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
