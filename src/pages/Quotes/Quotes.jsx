import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Quotes = () => {
  useTitle("Quotes");
  const [quoteData, setQuoteData] = useState(useLoaderData());

  const fetchNewQuotes = async () => {
    try {
      const response = await fetch(
        "https://api.gameofthronesquotes.xyz/v1/random/5"
      );
      const newQuotes = await response.json();
      setQuoteData(newQuotes);
    } catch (error) {
      console.error("Error fetching new quotes:", error);
    }
  };

  return (
    <div className="w-4/6 mx-auto text-left p-10" style={{ height: "1550px" }}>
      <div className="card w-5/6 bg-base-100 mx-auto shadow-xl mt-8">
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold mx-auto text-primary to-secondary">
            Disply Default Quotes
          </h1>

          <ul data-aos="fade-left">
            {quoteData.map((quote, index) => (
              <li
                key={index}
                className="bg-gradient-to-r from-primary to-secondary p-4 rounded text-black font-semibold mx-start mt-3"
              >
                <span className="font-semibold">{index + 1}</span> -{" "}
                {quote.sentence}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary bg-gradient-to-r from-primary to-secondary mt-6"
          onClick={fetchNewQuotes}
        >
          Show Other Quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
