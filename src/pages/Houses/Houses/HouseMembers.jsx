/**
 * Renders the list of house members.
 * @returns {JSX.Element} The rendered HouseMembers component.
 */
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
const HouseMembers = () => {
  useTitle("Members");

  // Retrieve the house details from the loader data
  const houseDetails = useLoaderData();
  console.log(houseDetails);

  // Destructure the members array from the houseDetails object
  const [{ members }] = houseDetails;

  return (
    <div className="w-5/6 mx-auto text-center mt-10">
      <h1 className="text-3xl">House Members</h1>
      <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 mt-5">
        {/* Iterate over each member and render their details */}
        {members.map((member) => (
          <div
            data-aos="flip-left"
            className="text-white text-2xl  card p-8 card-side shadow-xl bg-accent"
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
