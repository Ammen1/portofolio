import CallToAction from "../components/CallToAction";
import ImageSlider from "./ImageSlider";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <div className="max-w-2xl mx-auto p-3 text-center">
      <h1 className="text-3xl font-semibold">My Projects</h1>
      <p className="text-md text-gray-500 mt-5">
        Welcome to my projects showcase! Throughout my journey, I've had the
        privilege to work on diverse and impactful projects, refining my skills
        in technologies like Django, Node.js, Next.js, and React. Each project
        is a testament to my continuous learning and my commitment to crafting
        innovative solutions using these powerful technologies.
      </p>
      </div>
      <CallToAction />
      <ImageSlider />
    </div>
  );
}
