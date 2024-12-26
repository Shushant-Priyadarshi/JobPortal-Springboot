const ExperienceCard = (props:any) => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-950 rounded-md">
            <img
              src={`/assets/icon/${props.company?.toLowerCase()}.png`}
              className="h-7"
              alt={props.company}
            />
          </div>
          <div>
            <div className="font-semibold">{props.role}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.company} &#x2022; {props.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">{props.time}</div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">
        {props.description}
      </div>
    </div>
  );
};

export default ExperienceCard;
