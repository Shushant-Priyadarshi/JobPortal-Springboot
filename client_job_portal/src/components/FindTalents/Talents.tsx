import { dummyTalentData } from "../../../public/assets/data/FindTalentData"
import Sort from "../FindJobs/Sort"
import TalentCard from "./TalentCard"


const Talents = () => {
    return (
      <div className="p-5">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold">
            Recommended{" "}
            <span className="bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700 text-transparent bg-clip-text">
              Talents
            </span>
          </div>
          <Sort />
        </div>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyTalentData.map((talent, index) => (
            <TalentCard key={index} {...talent} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Talents;
  