import { Typewriter } from "react-simple-typewriter";
import video from "../../assets/video.mp4";

const Banner = () => {
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
          <h3 className="text-8xl">
            <span className="font-semibold text-white blur-none">
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

export default Banner;
