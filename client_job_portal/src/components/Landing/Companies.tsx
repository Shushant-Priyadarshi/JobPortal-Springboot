import Marquee from "react-fast-marquee"
import { companies } from "../../../public/assets/data/Data"


const Companies = () => {
  return (
    <>
    <div className="text-mine-shaft-200 mt-28 mb-12 text-center">
        <div className="text-4xl font-semibold ">Trusted By <span className="bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700 bg-clip-text text-transparent">1000+</span> Companies</div>
    </div>

    <div>
    <Marquee pauseOnHover={true}>
        {companies.map((company,index)=><div key={index} className="mx-8 px-2 py-1 mb-10 hover:bg-mine-shaft-950 rounded-lg cursor-pointer">
            <img className="h-16 " src={`assets/companies/${company}.png`} alt={`${company}-logo`}/>
        </div>)}
    </Marquee>
    </div>
    </>
  )
}

export default Companies