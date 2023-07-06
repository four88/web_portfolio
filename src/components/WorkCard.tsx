import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface propsType {
  workData: {
    img: string;
    title: string;
    date: string;
    position: string;
    description: string;
  };
}
function WorkCard({ workData }: propsType) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,

      transition: { duration: 0.8, ease: "easeIn", delay: 0.5 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.li
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      className=" w-full flex flex-row items-center bg-light py-6 px-8 justify-between rounded-xl max-sm:px-0 max-sm:py-4 max-sm:justify-center max-sm:bg-dark"
    >
      <div className="flex items-center w-full px-0 max-sm:flex-col">
        <img
          src={workData.img}
          alt={workData.title}
          className="w-[96px] mr-6 animate-spin-slow self-start max-sm:self-auto"
        />
        <div className="flex flex-col flex-wrap w-full  max-sm:items-center max-sm:px-6">
          <h3 className="font-clover font-bold  text-lg mb-2 max-md:text-md max-sm:text-sm max-sm:text-center">
            {workData.title}
          </h3>

          <h5 className="font-bold max-sm:text-sm">{workData.position}</h5>

          <p className="text-second mb-6 max-sm:text-sm">{workData.date}</p>
          <p className="w-full max-md:text-sm max-sm:text-center ">
            {workData.description}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default WorkCard;
