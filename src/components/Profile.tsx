import Element1 from "../assets/Asset_1.png";
function Profile() {
  return (
    <>
      <section className="flex flex-row w-full pt-[72px] pb-[72px] justify-center max-sm:pt-[36px] max-sm:pb-[36px]">
        <div className="flex flex-row items-center w-full max-sm:justify-center">
          <div className="flex flex-col">
            <span className="font-krick font-bold text-[256px] leading-none max-xl:text-[200px] max-lg:text-[150px] max-md:text-[100px] max-sm:text-[65px]">
              PHARANYU
            </span>
            <span className="font-krick font-bold text-[256px] leading-none mt-[-18px] max-xl:text-[200px] max-lg:text-[150px] max-md:text-[100px]  max-sm:text-[65px]">
              CHUENJIT
            </span>
          </div>

          <img
            className=" w-[496px] h-[496px] animate-spin-slow max-xl:w-[396px] max-xl:h-[396px] max-lg:w-[296px] max-lg:h-[296px] max-md:w-[196px] max-md:h-[196px] max-sm:w-[128px] max-sm:h-[128px]"
            src={Element1}
          />
        </div>
      </section>
      <p className="w-full h-auto font-clover font-regular text-xl mb-14 max-sm:text-sm ">
        As a full stack web developer with an MSc in Computer Science and
        experience with the MERN stack, my skills allow you to build robust and
        scalable web applications. With my passion for learning and staying on
        the cutting edge of web development, I can bring innovative solutions to
        clients and create digital solutions that make a real impact in today's
        competitive market.
      </p>
    </>
  );
}

export default Profile;
