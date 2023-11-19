import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Persons = () => {
  useTitle("Persons");

  const [persons, setPersons] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filtering persons based on the search term
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetching persons data from the external API when the component mounts
  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await fetch(
          "https://api.gameofthronesquotes.xyz/v1/characters"
        );
        const result = await response.json();
        setPersons(result);
      } catch (error) {
        console.error("Error fetching persons:", error);
      }
    };

    // Calling the fetchPersons function
    fetchPersons();
  }, []);

  // Rendering the Persons component
  return (
    <div
      className="w-4/6 mx-auto text-center mt-10"
      style={{ height: "1280px" }}
    >
      <h1 className="text-3xl">All Persons of GOT</h1>

      {/* Search input for filtering persons by name */}
      <input
        type="text"
        placeholder="Search by person name..."
        className="input input-bordered input-info w-full max-w-xs mt-6 text-2xl"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Grid layout for displaying persons or a message if no persons are found */}
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 mt-5">
        {filteredPersons.length > 0 ? (
          // Mapping through filtered persons and displaying them as cards with links
          filteredPersons.map((person) => (
            <div
              data-aos="zoom-in-up"
              className="card bg-gradient-to-r from-primary to-secondary p-5 font-semibold text-black"
              key={person.slug}
            >
              <Link to={`/persons/${person.slug}`}>
                <h3 className="text-2xl text-white">{person.name}</h3>
              </Link>

              {person.house && (
                <p className=" text-white">
                  <span className="text-black">Associated House:</span>{" "}
                  {person.house.name}
                </p>
              )}
            </div>
          ))
        ) : (
          <>
            <p className="font-bold text-4xl text-right ">No Persons found</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Persons;
