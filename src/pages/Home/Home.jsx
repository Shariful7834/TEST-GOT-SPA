import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import Thrones from "./Thrones";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Thrones></Thrones>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
