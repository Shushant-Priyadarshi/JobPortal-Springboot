import Companies from "../components/Landing/Companies";
import DreamJob from "../components/Landing/DreamJob";
import JobCategory from "../components/Landing/JobCategory";
import Subscribe from "../components/Landing/Subscribe";
import Testimonial from "../components/Landing/Testimonial";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-black font-['poppins']">
      <DreamJob />
      <Companies />
      <JobCategory />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default HomePage;
