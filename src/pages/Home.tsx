import Profile from "../components/Profile";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Profile />
      </motion.div>
      <section className="w-full" id="about">
        <About />
      </section>
      <section className="w-full" id="project">
        <Project />
      </section>
      <section className="w-full" id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
