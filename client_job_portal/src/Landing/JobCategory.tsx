import { Carousel } from "@mantine/carousel";
import { jobCategories } from "../../public/assets/data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="">
      <div className="text-mine-shaft-200 mt-20  text-center ">
        <div className="text-4xl font-semibold ">
          Browse{" "}
          <span className="bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700 bg-clip-text text-transparent">
            Job
          </span>{" "}
          Categories
        </div>
      </div>
      <div className="w-1/2 text-lg text-mine-shaft-200 mb-10 text-center mx-auto">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>

      <Carousel
        slideSize="27%"
        slideGap="md"
        controlSize={33}
        loop
        className="
     [&_button]:opacity-0
     [&_button]:hover:opacity-85
      [&_button]:bg-azure-radiance-700
      [&_button]:border-none"
        nextControlIcon={<IconArrowRight className="h-8 w-8 " />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8 " />}
      >
        {jobCategories.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col gap-2 border border-azure-radiance-700 items-center text-mine-shaft-100 w-64  p-5 rounded-lg cursor-pointer hover:cursor-pointer hover:shadow-[0_0_5px_2px_rgba(0,120,255,3)] my-5 transistion duration-300 ease-in-out">
              <div className="p-2 bg-azure-radiance-700 rounded-full ">
                <img
                  className="h-8 w-8"
                  src={`assets/categories/${category.name}.png`}
                  alt=""
                />
              </div>
              <div className="text-lg font-semibold">{category.name}</div>
              <div className="text-sm text-center text-mine-shaft-300">
                {category.description}
              </div>
              <div className="text-azure-radiance-700 text-lg">{`${category.jobs}+ new jobs posted`}</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
