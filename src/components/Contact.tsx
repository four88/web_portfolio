import ProfileImg from "../assets/profile.jpg";
import { saveAs } from "file-saver";
import Resume from "../assets/resume.pdf";

function Contact() {
  const downLoadResume = () => {
    const fileUrl = Resume;
    const fileName = "pharanyu_resume.pdf";

    saveAs(fileUrl, fileName);
  };
  return (
    <section className="w-full flex flex-row mt-36 mb-36 max-lg:flex-col-reverse max-lg:items-center">
      <div className="flex">
        <div className="flex flex-col rounded-xl border-2 border-primaly px-8 py-8 max-md:px-4 max-md:py-4">
          <img
            src={ProfileImg}
            alt="profile"
            className="w-[300px] h-[350px] object-fill rounded-xl"
          />
          <span className="text-primaly mb-6 font-extrabold text-[56px] font-krick max-sm:text-4xl max-sm:mt-4">
            Pharanyu Chuenjit
          </span>

          <div className="flex flex-col gap-6">
            <div className="w-full font-clover flex flex-col gap-2">
              <p className="text-primaly">
                <span className="font-bold">Birthdate:</span> 01 June 1997
              </p>
              <p className="text-primaly">
                <span className="font-bold">E-Mail: </span>
                pharanyuchuenjit@gmail.com
              </p>
            </div>

            <div className=" text-primaly font-clover flex flex-row gap-6 max-sm:gap-4">
              <a
                href="https://www.linkedin.com/in/pharanyu-chuenjit-845032203/"
                className="items-center flex border-[1px] border-primaly px-2 py-1 rounded-md hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/four88"
                className="items-center flex border-[1px] border-primaly px-2 py-1 rounded-md hover:border-accent hover:text-accent"
              >
                Github
              </a>
              <button
                onClick={downLoadResume}
                className="items-center flex border-[1px] border-primaly px-2 py-1 rounded-md hover:border-accent hover:text-accent"
              >
                My Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-8 w-[350px] flex-col flex max-lg:p-0 max-lg:self-start max-sm:w-full">
        <span className="text-accent font-extrabold text-[300px] font-krick leading-none max-xl:text-[250px] max-lg:text-[150px] max-md:text-[115px]">
          CONTACT
        </span>
        <span className="text-accent font-extrabold text-[300px] font-krick leading-none mt-[-30px] max-xl:text-[250px] max-lg:text-[150px] max-md:text-[115px]">
          ME
        </span>
      </div>
    </section>
  );
}

export default Contact;
