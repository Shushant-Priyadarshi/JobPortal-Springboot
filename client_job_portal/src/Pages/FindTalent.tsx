import { Divider } from "@mantine/core";
import SearchBar from "../components/FindTalents/SearchBar";
import Talents from "../components/FindTalents/Talents";


const FindTalent = () => {
  return (
    <div className=" min-h-[100vh] text-white">
      <Divider size="xs" mx="md"/>
      <SearchBar/>
      <Divider size="xs" mx="md"/>
      <Talents/>
    </div>
  );
};

export default FindTalent;
