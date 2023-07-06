import EducationCard from "./EducationCard";
import WorkCard from "./WorkCard.tsx";
import { educationData, experienceData } from "../data/data.ts";

function About() {
  return (
    <section className="flex flex-col w-full">
      <h1 className="font-krick font-bold text-[96px] max-sm:text-[48px]">
        About me
      </h1>
      <div className="flex flex-col w-full">
        <section className="w-auto bg-dark rounded-xl p-6 mb-8 max-sm:p-0 max-sm:bg-light">
          <h2 className="font-clover font-bold text-[36px] mb-6 max-sm:text-[32px]">
            Education
          </h2>
          <ul className="flex flex-col gap-4 w-full">
            {educationData.map((data) => {
              return <EducationCard eduData={data} />;
            })}
          </ul>
        </section>

        <section className="w-full bg-dark rounded-xl p-6 mb-8 max-sm:p-0 max-sm:bg-light">
          <h2 className="font-clover font-bold text-[36px] mb-6  max-sm:text-[32px]">
            Experience
          </h2>
          <ul className="flex flex-col gap-4 w-full">
            {experienceData.map((data) => {
              return <WorkCard workData={data} />;
            })}
          </ul>
        </section>
      </div>
    </section>
  );
}

export default About;
