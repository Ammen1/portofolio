import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">My Projects</h1>
      <p className="text-md text-gray-500">
        Welcome to my projects showcase! Throughout my journey, I've had the
        privilege to work on diverse and impactful projects, refining my skills
        in technologies like Django, Node.js, Next.js, and React. Each project
        is a testament to my continuous learning and my commitment to crafting
        innovative solutions using these powerful technologies.
      </p>

      <div className="flex flex-col gap-4">
        <div
          title="Portfolio Website"
          description="Designed and developed my personal portfolio using React and Tailwind CSS."
          techStack="React, Tailwind CSS"
        />
        <div
          title="E-commerce Platform"
          description="Contributed to building a robust e-commerce platform with Django and React, ensuring seamless user experiences."
          techStack="Django, React"
        />
      </div>
      <CallToAction />
    </div>
  );
}
