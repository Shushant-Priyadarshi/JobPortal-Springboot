const ExperienceCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-950 rounded-md">
            <img
              src={`/assets/icon/google.png`}
              className="h-7"
              alt={"google"}
            />
          </div>
          <div>
            <div className="font-semibold">Software Enginner</div>
            <div className="text-sm text-mine-shaft-300">
              Google &#x2022; New York, United States
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">Jan 2022 - Present</div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        voluptates deleniti nemo, voluptas ipsum perferendis aut libero,
        temporibus mollitia rerum laborum sapiente?
      </div>
    </div>
  );
};

export default ExperienceCard;
