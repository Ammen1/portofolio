import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PostCard from "../components/PostProject";
import Hero from "../components/Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import Skills from "./Skills";
import ImageSlider from "./ImageSlider";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [sliderVisible, setSliderVisible] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
      setSliderVisible(true);
    };
    fetchPosts();
  }, []);

  return (
    <div className="">
      <Hero />
      <div className="p-3 bg-white/95 dark:bg-[#0e1216]">
        <Services />
      </div>
      {sliderVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sm:block hidden">
            <ImageSlider />
          </div>
        </motion.div>
      )}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8">
        {posts && posts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                Explore My Recent Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="p-3 bg-amber-50 dark:bg-[#060e17]">
        <Skills />
      </div>

      <div>
        <div className="absolute z-[999] w-[30%] h-[30%]  dark:bg-gradient-to-r from-indigo-700  to-violet-800 via-sky-700  rounded-full  blue__gradient bottom-20  " />
      </div>
      <Navbar />
    </div>
  );
}
