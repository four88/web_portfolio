import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface propsType {
  eduData: {
    img: string;
    name: string;
    major: string;
    date: string;
  };
}

function Education({ eduData }: propsType) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,

      transition: { duration: 0.6, ease: "easeIn", delay: 0.3 },
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
      className="w-full flex flex-row items-center bg-light py-6 px-8 justify-between rounded-xl max-sm:px-0 max-sm:py-4 max-sm:justify-center max-sm:bg-dark"
      variants={itemVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="flex items-center w-full max-sm:flex-col">
        <img
          src={eduData.img}
          alt={eduData.name}
          className="w-[96px] mr-6 animate-spin-slow"
        />
        <div className=" w-full flex w-auto flex-col flex-wrap max-sm:items-center">
          <h3 className="font-clover font-bold text-lg max-sm:text-center max-sm:text-sm max-sm:mt-6 max-sm:w-[200px]">
            {eduData.name}
          </h3>
          <h4 className="max-sm:text-sm">{eduData.major}</h4>
          <h5 className=" text-second max-sm:text-sm">{eduData.date}</h5>
        </div>
      </div>
    </motion.li>
  );
}

export default Education;
