import people1 from "../../assets/people1.png";
import people2 from "../../assets/people2.png";
import people3 from "../../assets/people3.png";
import quote from "../../assets/quote.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const testimonialData = [
    {
      id: "1",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      title: "Willim Smith",
      location: "Dortmund",
    },
    {
      id: "2",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      title: "Anthony Cruiz",
      location: "Munich",
    },
    {
      id: "3",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      title: "Jessica",
      location: "Dusseldorf",
    },
  ];
  return (
    <div className="w-4/5 mx-auto text-center mt-20 my-40">
      <div className="flex justify-between">
        <div>
          <h4 className="text-2xl text-primary font-semibold text-left">
            Testimonial
          </h4>
          <h2 className="text-5xl font-bold">What the Audience Says</h2>
        </div>
        <img className=" lg:w-36 w-24" src={quote} alt="" />
      </div>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {testimonialData.map((review) => (
          <div key={review.id}>
            <div
              data-aos="zoom-in-up"
              className="card w-96 bg-base-100 shadow-xl mr-5 mb-5"
            >
              <div className="card-body">
                <p>{review.description}</p>
                <div className="flex mt-5 ">
                  <div className="avatar mr-6">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={review.img} alt="" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{review.title}</h2>
                    <p className="font-semibold"> {review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
