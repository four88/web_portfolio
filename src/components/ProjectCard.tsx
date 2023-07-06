import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface propsType {
  project: {
    img: string;
    title: string;
    description: string;
    link: string;
    git: string;
    frontend: string;
    backend: string;
  };
}

function ProjectCard({ project }: propsType) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const itemVariants = {
    hidden: { opacity: 0, x: -200 },

    visible: {
      opacity: 1,

      x: 0,

      transition: {
        duration: 0.6,
        ease: "easeIn",
        delay: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.li
      variants={itemVariants}
      ref={ref}
      initial="hidden"
      animate={controls}
      className="w-full flex flex-col bg-dark rounded-xl justify-between drop-shadow-xl"
    >
      <div className="w-full">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-[300px] object-cover rounded-tl-xl rounded-tr-xl"
        />
        <div className="px-6 py-4 ">
          <h2 className="font-semibold font-clover text-2xl mb-2 mt-4 max-md:text-xl">
            {project.title}
          </h2>
          <p>{project.description}</p>
          <div className="mt-4 mb-4">
            <p>Front-end : {project.frontend}</p>
            <p>Back-end : {project.backend}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 ml-6 mb-6">
        <a
          href={project.link}
          className="border-2 px-2 py-2 rounded-xl text-sm hover:text-accent hover:border-accent"
        >
          Live Website
        </a>
        <a
          href={project.git}
          className="border-2 px-2 py-2 rounded-xl text-sm hover:text-accent hover:border-accent"
        >
          Github
        </a>
      </div>
    </motion.li>
  );
}

export default ProjectCard;
