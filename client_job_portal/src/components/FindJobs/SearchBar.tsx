import { Divider, RangeSlider } from "@mantine/core";
import { dropDownData } from "../../../public/assets/data/Data";
import { MaxDisplayedItems } from "./MaxDisplayedItems";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex px-5 py-8">
      {dropDownData.map((item, index) => (
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
