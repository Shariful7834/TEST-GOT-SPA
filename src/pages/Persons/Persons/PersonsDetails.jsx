import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const PersonsDetails = () => {
  const personData = useLoaderData();
  const [{ name, house }] = personData;
  const { name: houseName } = house;

  // Call the `useLoaderData` hook and assign its return value to the `personData` variable.
  console.log(personData);

  const [{ quotes }] = personData;
  const [displayedQuote, setDisplayedQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setDisplayedQuote(quotes[randomIndex]);
  };
  // Destructure the `quotes` property from the `personData` object and assign it to the `quotes` variable.

  return (
    <div>
      <div className="card w-5/6 bg-base-100 mx-auto shadow-xl mt-8">
        <div className="card-body">
          <h1 className="card-title  text-3xl font-bold mx-auto">
            Persons Details
          </h1>
          <h3 className="text-2xl font-semibold">Person Name: {name} </h3>
          <h3 className="text-xl font-semibold">House Name: {name} </h3>

          <h2 className="text-3xl font-bold">Displayed Quote</h2>
          <div className="chat-bubble mx-auto">{displayedQuote}</div>
        </div>
      </div>

      <div>
        <button
          className="btn btn-outline btn-success mt-6"
          onClick={getRandomQuote}
        >
          Show Random Quote
        </button>
      </div>
      {/* <p className="text-2xl font-semibold mt-6">{quotes[0]}</p> */}
    </div>
  );
};

export default PersonsDetails;
