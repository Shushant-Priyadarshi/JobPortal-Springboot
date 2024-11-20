import { Avatar, Rating } from "@mantine/core";
import { testimonils } from "../../../public/assets/data/Data";

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
      <div>
        
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-stretch">
  {testimonils.map((testimonial, index) => (
    <div
      key={index}
      className="w-[300px] max-w-full border border-azure-radiance-700 text-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-14 w-14" src="assets/avatar-img.png" alt="Avatar" />
        <div>
          <div className="text-lg font-bold ">
            {testimonial.name}
          </div>
          <Rating value={testimonial.rating} fractions={2} readOnly />
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300 italic">
        "{testimonial.feedback}"
      </div>
    </div>
  ))}
</div>

        
     
    </div>
  );
};

export default Testimonial;
