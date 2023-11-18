import useTitle from "../../../hooks/useTitle";

const Quotes = () => {
  useTitle("Quotes");
  return (
    <div
      className="w-5/6 mx-auto text-center mt-10"
      style={{ height: "800px" }}
    >
      <h1 className="text-5xl">All Quotes will be shown here</h1>
    </div>
  );
};

export default Quotes;
