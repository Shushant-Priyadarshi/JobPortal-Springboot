import { Avatar, Rating } from "@mantine/core";
import { testimonils } from "../../public/assets/data/Data";

const Testimonial = () => {
  return (
    <div>
      <div className="text-mine-shaft-200 mt-20  text-center ">
        <div className="text-4xl font-semibold ">
          Loved by &nbsp;
          <span className="bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700 bg-clip-text text-transparent">
            thousands
          </span>{" "}
          of people
        </div>
      </div>
      <div className="w-1/2 text-lg text-mine-shaft-200 mb-10 text-center mx-auto">
        Here's what some of our users have to say about{" "}
        <span className="font-semibold bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700 bg-clip-text text-transparent">
          JobHunter
        </span>
        .
      </div>

        {testimonils.map((testimonil ,index)=><div key={index} className="">
        <div className="text-mine-shaft-200 flex flex-col gap-3 [&_.here]:text-mine-shaft-300 w-[23%] border border-azure-radiance-700 p-3 rounded-xl mt-10">
        <div className="flex  items-center gap-2">
          <Avatar className="!h-14 !w-14 " src="assets/avatar-img.png" alt="me" />
          <div>
            <div className="text-lg">{testimonil.name}</div>
            <Rating value={testimonil.rating} fractions={2} readOnly />
          </div>
        </div>
        <div className="text-sm here ">{testimonil.feedback}</div>
      </div>
        </div>)}
     
    </div>
  );
};

export default Testimonial;
