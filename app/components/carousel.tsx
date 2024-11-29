import Image from "next/image"; // Assuming you're using Next.js for image optimization
import styles from "./carousel.module.css"; // Import your CSS module for any custom styles

const AlumniTestimonials = () => {
  const testimonials = [
    {
      name: "Jowett",
      title: "Cloud Native Architect",
      text: "SMU's Business Intelligence & Analytics program provided me with hands-on experience in data science while connecting me to a vibrant community of data professionals and industry experts.",
      imgSrc: "/images/jowett.jpg", // Replace with actual image paths
    },
    {
      name: "Gigi Teo",
      title: "ML Quant",
      text: "BIA's DAP programme is a wonderful learning opportunity for members, with guidance from industry experts and seniors to work on projects that 'get their hands dirty with data and ML'.",
      imgSrc: "/images/gigi3.jpg",
    },
    {
      name: "Brejesh",
      title: "Role1",
      text: "I had a great time in SMUBIA. Work day and night... it was amazing... Wow... I gained a lot of experience...",
      imgSrc: "/images/photo1.jpg",
    },
  ];

  return (
    <div className="bg-black text-white">
      <h1 className={styles.maintext}>
        Beyond Singapore Management University
      </h1>
      <p className={styles.text}>
        Our alumni have worked in leading companies across finance and
        technology, consistently striving for success and making a lasting
        impact.
      </p>
      <h2 className={styles.secondtext}>
        Connect with our alumni by partnering with us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <Image
              className="rounded-full mb-4"
              src={testimonial.imgSrc}
              alt={testimonial.name}
              width={100} // Set your desired width
              height={100} // Set your desired height
            />
            <div className={styles.testimonialcontainer}>
              <p className={styles.testimonialtext}>{testimonial.text}</p>
              <div className={styles.testimonialfooter}>
                <p className={styles.testimonialname}>{testimonial.name}</p>
                <p className={styles.testimonialtitle}>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniTestimonials;
