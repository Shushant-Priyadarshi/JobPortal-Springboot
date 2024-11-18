import Header from "../Header/Header"
import Companies from "../Landing/Companies"
import DreamJob from "../Landing/DreamJob"


const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-black font-['poppins']">
        <Header/>
        <DreamJob/>
        <Companies/>
    </div>
  )
}

export default HomePage