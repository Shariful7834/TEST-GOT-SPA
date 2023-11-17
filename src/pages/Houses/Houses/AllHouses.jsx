import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllHouses = () => {
  const [houses, setHouses] = useState([]);
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
      {/* <p>Total Houses: {houses.length}</p>

      <h2>Houses Data</h2> */}
      <input
        type="text"
        placeholder="Search houses..."
        className="input input-bordered input-info w-full max-w-xs mt-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 mt-5">
        {filteredHouses.length > 0 ? (
          filteredHouses.map((house) => (
            <li
              className="card bg-slate-200 p-5 font-semibold text-black"
              key={house.slug}
            >
              <Link to={`/houses/${house.slug}`}>
                <h3>{house.name}</h3>
              </Link>
              {/* Additional house details can be added here */}
            </li>
          ))
        ) : (
          <p>No houses found for the current search term.</p>
        )}
      </ul>
    </div>
  );
};

export default AllHouses;
// {
//   houses.map((house) => (
//     <div
//       className="card bg-slate-200 p-5 font-semibold text-black"
//       key={house.id}
//     >
//       <Link to={`/houses/${house.slug}`}>
//         <h3>{house.name}</h3>
//       </Link>
//       {/* Additional house details can be added here */}
//     </div>
//   ));
// }
