import Image from "next/image"; // Assuming you're using Next.js for image optimization
import styles from "./carousel.module.css"; // Import your CSS module for any custom styles

const AlumniTestimonials = () => {
  const testimonials = [
    {
      name: "Jowett",
      title: "Cloud Native Architect (Dell Technologies)",
      text: "SMU's Business Intelligence & Analytics program provided me with hands-on experience in data science while connecting me to a vibrant community of data professionals and industry experts",
      imgSrc: "/images/jowett.jpg", // Replace with actual image paths
    },
    {
      name: "Brijesh",
      title: "Head of Intel",
      text: "I had a great time in SMUBIA. Work day and night... it was amazing... Wow... I gained a lot of experience...",
      imgSrc: "/images/photo1.jpg",
    },
    {
      name: "Brijesh",
      title: "Head of Intel",
      text: "I had a great time in SMUBIA. Work day and night... it was amazing... Wow... I gained a lot of experience...",
      imgSrc: "/images/photo1.jpg",
    },
  ];

  return (
    <div className="bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">
        Beyond Singapore Management University
      </h1>
      <p className="mb-10">
        Our alumni have worked in leading companies across finance and
        technology, consistently striving for success and making a lasting
        impact.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
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
            <p className="font-semibold">{testimonial.text}</p>
            <p className="mt-4">{testimonial.name}</p>
            <p className="text-gray-400">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniTestimonials;
