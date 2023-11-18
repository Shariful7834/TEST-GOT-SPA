import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllHouses = () => {
  const [houses, setHouses] = useState([]);
  
  console.log(houses);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHouses = houses.filter((house) =>
    house.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch(
          "https://api.gameofthronesquotes.xyz/v1/houses"
        );
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);
  return (
    <div style={{ height: "800px" }}>
      <h1 className="text-5xl">All Houses will be shown here</h1>
      {/* Searchable features implemented here  */}
      <input
        type="text"
        placeholder="Search houses..."
        className="input input-bordered input-info w-full max-w-xs mt-6 text-2xl"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 mt-5">
        {filteredHouses.length > 0 ? (
          filteredHouses.map((house) => (
            <div
              className="card bg-slate-200 p-5 font-semibold text-black"
              key={house.slug}
            >
              <Link to={`/houses/${house.slug}`}>
                <h3>{house.name}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p className="font-bold text-4xl">
            No houses found for the current search term.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllHouses;
