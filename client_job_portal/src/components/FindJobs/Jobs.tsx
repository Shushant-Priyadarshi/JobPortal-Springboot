import { jobList } from "../../../public/assets/data/Data";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between ">
        <div className="text-2xl font-semibold ">
          Recommended{" "}
          <span className="bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700 text-transparent bg-clip-text">
            Jobs
          </span>
        </div>
        <Sort />
      </div>
      <div className=" mt-10 flex flex-wrap gap-7 justify-between ">
        {jobList.map((items,index)=><JobCard key={index} {...items}/>)}
      </div>
    </div>
  );
};

export default Jobs;
