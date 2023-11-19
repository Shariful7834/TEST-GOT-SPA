import errorImage from "../../../assets/dribbble_1.gif";

const ErrorPage = () => {
  return (
    <div
      className="w-4/6 mx-auto text-center mt-10 "
      style={{ height: "800px" }}
    >
      <img src={errorImage} alt="Error page" />
    </div>
  );
};

export default ErrorPage;
