import { Avatar, Button, Divider, Text } from "@mantine/core";
import {  IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  return (
    <div className=" p-4 w-96 flex flex-col gap-3 rounded-lg border border-azure-radiance-700 cursor-pointer">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-950 rounded-full">
            <Avatar
              size="lg"
              src={`/assets/${props.image}.png`}
              className=""
              alt={props.companyName}
            />
          </div>
          <div>
            <div className="font-semibold text-md">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <IconHeart />
      </div>

      <div className="flex gap-2" >
  {props.topSkills?.map((skill: any, index: any) => (
    <div className="p-2 py-1 bg-mine-shaft-950 text-azure-radiance-700 rounded-lg text-xs" key={index}>{skill}</div>
  ))}
</div>


      <Text
        lineClamp={3}
        className="!text-mine-shaft-300 !text-xs text-justify"
      >
      
       {props.about}
      </Text>
      <Divider size="xs" color="azure-radiance.7" />
      <div className="flex justify-between text-sm">
        <div className="text-mine-shaft-100">{props.expectedCTC}</div>
        <div className="flex  items-center text-mine-shaft-300 text-xs gap-2">
          <IconMapPin className="h-4 w-4" />
          {props.location}
        </div>
      </div>
      <Divider size="xs" color="azure-radiance.7" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1 ">
        <Link to="/talent-profile">
          <div
            className="
        "
          >
            <Button color="azure-radiance.7" variant="outline" fullWidth>
              Profile
            </Button>
          </div>
        </Link>
        <div>
          <Button color="azure-radiance.7"  variant="light" fullWidth>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
