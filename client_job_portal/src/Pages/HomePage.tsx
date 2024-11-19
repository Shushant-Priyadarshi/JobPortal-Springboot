import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Companies from "../Landing/Companies"
import DreamJob from "../Landing/DreamJob"
import JobCategory from "../Landing/JobCategory"
import Subscribe from "../Landing/Subscribe"
import Testimonial from "../Landing/Testimonial"



const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-black font-['poppins']">
        <Header/>
        <DreamJob/>
        <Companies/>
        <JobCategory/>
        <Testimonial/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default HomePage