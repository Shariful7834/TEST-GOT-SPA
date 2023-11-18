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
      <h1 className="text-3xl">Persons Details will be shown here</h1>
      <h1>Name: {name}</h1>
      <h1>House Name: {houseName}</h1>
      <div>
        <h2>Displayed Quote</h2>

        <div className="chat-bubble mx-auto">{displayedQuote}</div>

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
// {personData.quotes.map((quote) => (
//   <div
//     className="card bg-slate-200 w-90 mt-3 p-5 font-semibold text-black"
//     key={quote.slug}
//   >
//     <h3>{quote}</h3>

//     {/* Additional house details can be added here */}
//   </div>
// ))}
