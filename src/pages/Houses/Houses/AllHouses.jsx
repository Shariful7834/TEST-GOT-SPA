import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const AllHouses = () => {
  useTitle("Houses");
  const [houses, setHouses] = useState([]);

  // console.log(houses);
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
    <div
      className="w-4/6 mx-auto text-center mt-10 "
      style={{ height: "800px" }}
    >
      <h1 className="text-3xl">All Houses of GOT</h1>
      {/* Searchable features implemented here  */}
      <div>
        <input
          type="text"
          placeholder="Search houses..."
          className="input input-bordered input-info w-full max-w-xs mt-6 text-2xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 mt-5">
        {filteredHouses.length > 0 ? (
          filteredHouses.map((house) => (
            <div
              data-aos="zoom-in"
              className="text-white text-2xl  card p-8 card-side shadow-xl bg-gradient-to-r from-primary to-secondary"
              key={house.slug}
            >
              <Link to={`/houses/${house.slug}`}>
                <h3>{house.name}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p className="font-bold text-right text-4xl">No houses found.</p>
        )}
      </div>
    </div>
  );
};

export default AllHouses;
