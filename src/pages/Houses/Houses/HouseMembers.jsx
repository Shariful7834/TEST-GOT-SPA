import { useLoaderData } from "react-router-dom";

const HouseMembers = () => {
  const houseDetails = useLoaderData();
  console.log(houseDetails);
  const [{ members }] = houseDetails;

  return (
    <div>
      <h1 className="text-3xl">House Members</h1>
      <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 mt-5">
        {members.map((member) => (
          <div
            className="card bg-slate-200 w-90 mt-3 p-5 font-semibold text-black"
            key={member.slug}
          >
            <h3>{member.name}</h3>

            {/* Additional house details can be added here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseMembers;
