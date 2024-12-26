import { dummyTalentData } from "../../../public/assets/data/FindTalentData";
import TalentCard from "../FindTalents/TalentCard";

const RecommendedTalents = () => {
  return <div>
    <div className="text-xl font-semibold mb-5">Recommended Talents</div>
    <div className="flex flex-col flex-wrap gap-5 ">
        {dummyTalentData.map((talent,index)=>index<4 && <TalentCard key={index} {...talent}/>)}
    </div>
  </div>;
};

export default RecommendedTalents;
