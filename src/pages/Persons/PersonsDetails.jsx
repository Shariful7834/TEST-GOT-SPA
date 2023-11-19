import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const PersonsDetails = () => {
  useTitle("Person Details");
  const personData = useLoaderData();
  const [{ name, house }] = personData;
  const houseName = house ? (
    house.name
  ) : (
    <span className="text-red-600 ml-2">No House Found</span>
  );

  const [displayedQuotes, setDisplayedQuotes] = useState([]);
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    const fetchRandomQuotes = async () => {
      try {
        const response = await fetch(
          `https://api.gameofthronesquotes.xyz/v1/random/${personData[0].quotes.length}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }

        const data = await response.json();
        const newQuotes = data.map((quoteData) => quoteData.sentence);
        setDisplayedQuotes(newQuotes);
      } catch (error) {
        console.error("Error fetching quotes:", error.message);
      }
    };

    if (isRandom) {
      fetchRandomQuotes();
    } else {
      const [{ quotes }] = personData;
      setDisplayedQuotes(quotes);
    }
  }, [isRandom, personData]);

  const handleRandomQuotesClick = () => {
    setIsRandom(true);
  };

  return (
    <div className="w-4/6 mx-auto text-left p-10" style={{ height: "2050px" }}>
      <div className="card w-5/6 bg-base-100 mx-auto shadow-xl mt-8">
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold mx-auto">
            Persons Details
          </h1>
          <h3 className="text-2xl font-semibold">Person Name: {name} </h3>
          <h3 className="text-xl font-semibold">
            <span className="mr-3">House Name:</span>
            {houseName}
          </h3>
          <h2 className="text-2xl font-bold my-3">Displayed Quote</h2>
          <ul data-aos="fade-right">
            {displayedQuotes.map((quote, index) => (
              <li
                className="bg-gradient-to-r from-primary to-secondary p-4 rounded text-black font-semibold mx-start mt-3 "
                key={index}
              >
                {quote}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary bg-gradient-to-r from-primary to-secondary mt-6"
          onClick={handleRandomQuotesClick}
        >
          Show Other Quote
        </button>
      </div>
    </div>
  );
};

export default PersonsDetails;
