import { Divider, Input, RangeSlider } from "@mantine/core";

import { MaxDisplayedItems } from "../FindJobs/MaxDisplayedItems";
import { useState } from "react";
import { searchFields } from '../../../public/assets/data/FindTalentData';
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex px-5 py-8">

      <div className="flex items-center">
          <div className="bg-mine-shaft-900 text-azure-radiance-700 rounded-full p-1 mr-2"><IconUserCircle size={20}/></div>
          <Input className="[&_input]:!placeholder-mine-shaft-200" variant="unstyled" placeholder="Talent Name"/>
      </div>


      {searchFields.map((item, index) => (
        <>
          <div className="w-1/5" key={index}>
            <MaxDisplayedItems {...item} />
          </div>
          <Divider mr="xs" size={"xs"} orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
      <div className="flex justify-between text-sm">
        <div>Salary</div>
        <div>&#8377;{value[0]} LPA - &#8377; {value[1]} LPA </div>
      </div>
        <RangeSlider size={"xs"} color="azure-radiance.7" value={value} onChange={setValue}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
