import { Button } from "flowbite-react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section className="w-full min-h-screen">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* First Column */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="h-full md:w-1/2 w-full md:order-2 order-1 right-0 bottom-0 top-5 dark:bg-[#06223F]  dark:bg-gradient-to-r from-teal-700 via-purple-900 to-orange-900 dark:hover:bg-gradient-to-tl border-y-green-900 transition-all duration-1000  bg-neutral-200"
        >
          <div className="gap-6">
            <h1 className="rotate-90 mb-6 md:mb-56 top-[10%] right-[15%] text-2xl md:text-3xl lg:text-4xl font-extrabold">
              {hero.firstName}{" "}
              <span className="dark:text-white px-2 py-1 bg-gradient-to-r from-amber-700 via-purple-800 to-pink-700 rounded-lg text-white">
                {hero.LastName}
              </span>
            </h1>
            <h1 className="text-3xl md:block hidden font-extrabold text-center lg:-translate-y-36">
              {hero.firstName}{" "}
              <span className="px-2 py-1">{hero.LastName}</span>
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
          <div className=" h-12 flex-col justify-end sm:block hidden bg-gradient-to-r from-amber-600 via-purple-500 to-pink-500">
            <Button
              gradientDuoTone="purpleToPink"
              className="p-2 md:p-2 px-6 md:px-4  ml-44 animate-bounce"
            >
              {hero.btnText}
            </Button>
          </div>
          <div className="flex flex-col space-y-5 lg:gap-12 mt-6">
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
                <p className="dark:text-white text-sm md:text-base mt-2">
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
