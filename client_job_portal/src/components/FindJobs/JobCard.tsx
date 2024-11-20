import { Divider, Text } from "@mantine/core";
import { IconClockHour3, IconHeart } from "@tabler/icons-react";

const JobCard = (props:any) => {
  return (
    <div className=" p-4 w-80 flex flex-col gap-3 rounded-lg border border-azure-radiance-700 hover:scale-[105%]  transition duration-300 ease-in-out cursor-pointer">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-950 rounded-md">
            <img
              src={`/assets/icon/${props.companyName.toLowerCase()}.png`}
              className="h-7"
              alt={props.companyName}
            />
          </div>
          <div>
            <div className="font-semibold">{props.jobtitle}</div>
            <div className="text-sm text-mine-shaft-300">
             {props.companyName} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <IconHeart />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-950 [&>div]:text-azure-radiance-700 text-xs [&>div]:rounded-lg">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text
        lineClamp={3}
        className="!text-mine-shaft-300 !text-xs text-justify"
      >
        {" "}
       {props.description}
      </Text>
      <Divider size="xs" color="azure-radiance.7" />
      <div className="flex justify-between text-sm">
        <div className="text-mine-shaft-100">&#8377; {props.package}</div>
        <div className="flex  items-center text-mine-shaft-300 text-xs gap-2">
          <IconClockHour3 className="h-4 w-4"/>
          {props.postedDaysAgo} days ago
        </div>
      </div>
    </div>
  );
};

export default JobCard;
