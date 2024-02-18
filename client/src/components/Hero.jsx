import { Button } from "flowbite-react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section className=" overflow-hidden">
      <div className="min-h-screen relative animate-pulse flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* First Column */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full animate-pulse md:w-4/12 w-8/12 top-0 right-0 dark:bg-gradient-to-tr from-indigo-800  to-violet-800 via-sky-800  dark:hover:bg-gradient-to-tl border-y-green-900 transition-all duration-700  bg-neutral-200 z-10"
        >
          <div className=" space-x-6 space-y-4">
            <h1 className=" mt-40  motion-reduce:aspect-video cursor-progress text-3xl font-extrabold text-center ">
              {hero.firstName}{" "}
              <span className="px-2 py-1">{hero.LastName}</span>
            </h1>
            <h1 className="mt-7 font-extrabold text-center">
              <span className="px-2 py-1  text-4xl text-ellipsis font-extrabold rounded-lg ">
                Full Stack
              </span>{" "}
              <span className="px-2 py-1 font-extrabold  text-4xl  ">
                web Developer
              </span>
            </h1>
          </div>
        </div>

        {/* Second Column */}
        <div className="md:h-[37rem] h-96 md:order-1 order-2 md:w-1/2">
          <img
            src={hero.image}
            alt="..."
            className="h-full object-cover w-full"
          />
        </div>

        {/* Main Content */}
        <div
          className="md:w-4/12 w-full pb-6 md:pt-10 px-6 md:pl-12 md:pr-8 pt-8 self-center"
          data-aos="fade-down"
        >
          <h2 className="dark:text-white text-3xl md:text-4xl lg:text-5xl font-extrabold">
            {hero.title}
          </h2>
          <br />
          <div className=" h-12 flex-col justify-end ">
            <Button
              gradientDuoTone="purpleToPink"
              className="p-2 md:p-2 px-6 md:px-4 animate-bounce"
            >
              {hero.btnText}
            </Button>
          </div>
          <div className="flex flex-col space-y-3 lg:gap-12 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-full md:w-80 gap-4 ${
                  i === 1 && "md:text-right"
                }`}
              >
                <h3 className="dark:text-white text-xl md:text-4xl lg:text-5xl font-extrabold">
                  {content.count}
                </h3>
                <p className="dark:text-white md:text-base lg:text-md mt-2">
                  {content.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
