import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const HouseMembers = () => {
  useTitle("Members");

  // Retrieve the house details from the loader data
  const houseDetails = useLoaderData();
  console.log(houseDetails);

  // Destructure the members array from the houseDetails object
  const [{ members }] = houseDetails;

  return (
    <div
      className="w-5/6 mx-auto text-center mt-10"
      style={{ height: "1280px" }}
    >
      <h1 className="text-3xl">House Members</h1>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 mt-5">
       
        {members.map((member) => (
          <div
            data-aos="flip-left"
            className="text-white text-2xl  card p-8 card-side shadow-xl bg-gradient-to-r from-primary to-secondary"
            key={member.slug}
          >
            <Link to={`/members/${member.slug}`}>
              <h3 className="text-2xl text-white">{member.name}</h3>
            </Link>

         
          </div>
        ))}
      </div>
    </div>
  );
};
export default HouseMembers;
