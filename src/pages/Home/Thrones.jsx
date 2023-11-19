import { Link } from "react-router-dom";
import back from "../../assets/back.jpg";
import stark1 from "../../assets/stark1.png";
const Thrones = () => {
  return (
    <div>
      <section>
        <div className="mt-20">
          <h1 className="text-5xl font-bold text-center">You May Also Like</h1>
          <h4 className="text-3xl text-primary font-semibold text-center mt-5">
            View Quotes
          </h4>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="hero mt-20"
        style={{ background: `url(${back})` }}
      >
        <div className="hero-content flex-col lg:flex-row -mb-4">
          <img
            src={stark1}
            className="lg:w-1/2 -mt-40 rounded-lg hidden md:block lg:block"
            alt=""
          />
          <div>
            <h3 className="text-primary text-2xl mb-4 font-bold">
              View Quotes
            </h3>
            <h1 className="text-4xl font-bold text-white">Long Story Short</h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using Content here, content
              making it look like readable English. Many desktop publishing
              packages and web page
            </p>
            <Link
              to="/quotes"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary mt-2"
            >
              View Quotes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thrones;
