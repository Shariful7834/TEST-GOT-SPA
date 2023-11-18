import video from "../../assets/video.mp4";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="hero object-cover bg-gray-900">
      <video
        className="object-cover w-full h-full mix-blend-plus-lighter"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4"></source>
      </video>
      <div className="content">
        <div className="provide">
          <h3 className="text-9xl">
            <span className="font-bold text-white blur-none">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["GAME OF THRONES  ", "LONG STORY SHORT"]}
                loop={0}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
{
  /* <div
      className="hero"
      style={{ backgroundImage: `url(${bg})`, height: "600px" }}
    >
      <div
        className="hero-content flex-col lg:flex-row-reverse justify-between"
        style={{ height: "500px" }}
      >
        <img src={back} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-white">
            Game of Thrones <br />
          </h1>
          <h3 className="text-3xl py-6 text-white">Long Story Short</h3>
        </div>
      </div>
    </div> */
}
