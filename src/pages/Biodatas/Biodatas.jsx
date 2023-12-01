import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BiodataCard from "../Home/PremiumMember/BiodataCard";

const Biodatas = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodata`);
      return res.data;
    },
  });
  console.log(data);
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/gMcmv71/403679677-6916773688414819-38648167620083882-n.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex">
        <div className="w-1/5 bg-slate-500 min-h-screen opacity-10">
          <h1>this is filtering section</h1>
        </div>
        <div className="flex-1">
          <div className="flex justify-center ">
            <h3 className="text-4xl font-semibold text-[#836b6c] text-center mt-20 mb-16 border-y-2 p-4">
              Choice Your Favourite Person
            </h3>
          </div>
          {
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
              {data?.map((item) => (
                <BiodataCard key={item._id} item={item}></BiodataCard>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
