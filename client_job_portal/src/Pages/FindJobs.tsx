
import { Divider } from "@mantine/core";
import SearchBar from "../components/FindJobs/SearchBar";

import Jobs from "../components/FindJobs/Jobs";

const FindJobs = () => {
  return (
    <div className=" min-h-[100vh] text-white">
      <Divider size="xs" mx="md"/>
      <SearchBar/>
      <Divider size="xs" mx="md"/>
      <Jobs/>
      
    </div>
  );
};

export default FindJobs;
