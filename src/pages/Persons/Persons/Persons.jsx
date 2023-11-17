import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Persons = () => {
  const [persons, setPersons] = useState([]);

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

    fetchPersons();
  }, []);

  return (
    <div style={{ height: "800px" }}>
      <h1 className="text-5xl">All Persons will be displayed here</h1>

      <div>
        <h2>Persons</h2>
        {persons.map((person) => (
          <Link key={person.slug} to={`/persons/${person.slug}`}>
            <div className="list-item">
              <h3>{person.name}</h3>
              {person.house && <p>House: {person.house}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Persons;
