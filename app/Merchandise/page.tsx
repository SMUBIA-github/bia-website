import React from "react";
import styles from "./page.module.css";

const Merchandise = () => {
  return (
    <div className={styles.fontstyle}>
      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
          Future Merchandise
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-12">
          Check back soon for our latest products!
        </p>
        {/* <button className="bg-white text-black px-6 py-3 rounded-md text-lg hover:bg-gray-200 transition-colors duration-300">
        Shop Now
      </button> */}
      </div>
    </div>
  );
};

export default Merchandise;
