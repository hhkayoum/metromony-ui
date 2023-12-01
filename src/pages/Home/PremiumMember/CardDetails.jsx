import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";

const CardDetails = () => {
  const cardData = useLoaderData();
  // const { _id } = useParams();
  // console.log(_id);
  const {
    id,
    biodataType,
    age,
    name,
    profileImg,
    dateOfBirth,
    height,
    occupation,
    race,
    fathersName,
    mothersName,
    permanentDivisionName,
    presentDivisionName,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    mobileNumber,
    userEmail,
  } = cardData;
  console.log(cardData.name);
  let addFavouritesData = {
    name: cardData.name,
    id: cardData.id,
    permanentDivisionName: cardData.permanentDivisionName,
    occupation: cardData.occupation,
  };
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async () => {
    const menuRes = await axiosPublic.post("/favourites", addFavouritesData);
    console.log(menuRes.data);
    if (menuRes.data.insertedId) {
      // show success popup
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${addFavouritesData.name} is added to the favourites.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  // filtering data by biodata type

  const { data } = useQuery({
    queryKey: ["repoData", biodataType],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodata?biodataType=${biodataType}`);
      return res.data;
    },
  });
  console.log(biodataType);
  console.log(data);
  return (
    <div
      className="lg:min-h-[90vh] flex "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/P1ddW3Q/403755237-7007749992620544-1184593736249786652-n.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1">
        <div className="flex justify-center ">
          <h3 className="text-4xl font-semibold text-[#836b6c] text-center mt-32 mb-16 border-y-2 p-4">
            {name} Biodata Details
          </h3>
        </div>
        <div className=" border border-gray-700 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 ">
          <div className=" p-5  ">
            <div>
              <div className="flex justify-center">
                <img
                  className="object-center w-80  h-80 rounded-full mb-4   bg-[#EBEDEE] "
                  src={profileImg}
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className="border-2 px-2 border-[#836b6c]">
                <h5 className=" text-4xl mb-6 font-bold tracking-tight text-[#836b6c] dark:text-white">
                  Personal Information
                </h5>
                <div className="grid grid-cols-2  ">
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Biodata ID : {id}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Occupation : {occupation}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Gender : {biodataType}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Date Of Birth : {dateOfBirth}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Height : {height}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Age : {age}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Race : {race}
                  </p>
                </div>
              </div>
              <div className="border-2 px-2 border-[#836b6c]">
                <h5 className="mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                  Family Information
                </h5>
                <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                  FathersName : {fathersName}
                </p>
                <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                  MothersName : {mothersName}
                </p>
              </div>

              <div className="border-2 px-2 border-[#836b6c]">
                <h5 className="mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                  Address
                </h5>
                <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                  Permanent Division Name : {permanentDivisionName}
                </p>
                <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                  PresentDivisionName : {presentDivisionName}
                </p>
              </div>

              <div className="border-2 px-2 border-[#836b6c]">
                <h5 className=" mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                  Expectation
                </h5>
                <div className="grid grid-cols-2">
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Expected Partner Age : {expectedPartnerAge}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Expected Partner Height :{expectedPartnerHeight}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Expected Partner Weight : {expectedPartnerWeight}
                  </p>
                </div>
              </div>
              <div className="border-2 px-2 border-[#836b6c]">
                <h5 className="mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                  Contact Information
                </h5>
                <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                  Email : {userEmail}
                </p>
                <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                  Contact Number : {mobileNumber}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="relative text-xl font-semibold inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-[#836b6c] group-hover:from-red-200 group-hover:via-red-300 group-hover:to-[#836b6c] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Details
              </span>
            </button>
            <button
              onClick={handleSubmit}
              className="relative text-xl font-semibold inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-[#836b6c] group-hover:from-red-200 group-hover:via-red-300 group-hover:to-[#836b6c] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add to favourites
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        {" "}
        <div className="flex justify-center ">
          <h3 className="text-4xl font-semibold text-[#836b6c] text-center mt-32 mb-16 border-y-2 p-4">
            Your Suggetion
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
