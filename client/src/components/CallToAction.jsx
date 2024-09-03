import go from "../assets/images/Projects/go.png";
import img1 from "../assets/images/Projects/img1.png";
import img2 from "../assets/images/Projects/img2.png";
import img3 from "../assets/images/Projects/img3.png";
import project from "../assets/images/Projects/project.png";

export default function CallToAction() {
  const images = [
    {
      src: go,
      alt: "Goderash",
      link: "http://gooderash.com/",
      description: "An ongoing project aimed at creating a reliable fuel delivery service platform.",
    },
    {
      src: img1,
      alt: "Another ",
      link: "https://github.com/Ammen1/Lepton-Games-Onboarding---Assessment",
      description: "A comprehensive solution for managing invoices, tracking payments, and generating reports.",
    },
    {
      src: img2,
      alt: "Another Project",
      link: "https://github.com/Ammen1/road-construction-Expense-Monitoring",
      description: "A robust road construction management system featuring advanced project tracking, resource management, and progress monitoring..",
    },
    {
      src: img3,
      alt: "Another Project",
      link: "https://book-rental-application.vercel.app",
      description: "A user-friendly book rental platform with efficient book search, rental management, and user-friendly interface for seamless borrowing and returning of books.",
    },
    {
      src: project,
      alt: "Another Project",
      link: "https://kandaka-event.vercel.app/",
      description: "A social media app designed for professionals to connect and collaborate.",
    },
  ];

  return (
    <div className="flex flex-wrap  justify-center gap-4 p-3 border border-teal-500 rounded-tl-3xl rounded-br-3xl text-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center w-auto max-w-sm">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-64 flex items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full shadow-md"
            />
            <div className="absolute h-40 mt-24 w-auto hover:bg-gradient-to-r hover:from-zinc-950 hover:via-slate-700 hover:to-black inset-0 bg-gradient-to-t  from-black via-transparent to-transparent  flex flex-col justify-end p-4">
              <p className="text-white  text-lg font-semibold drop-shadow-md">
                {image.description}
              </p>
            </div>
          </div>
            </a>
        </div>
      ))}
    </div>
  );
}
