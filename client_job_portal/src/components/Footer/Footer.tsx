import { IconBrandInstagram, IconBrandLinkedinFilled, IconBrandTelegram, IconTargetArrow } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { footerLinks } from "../../../public/assets/data/Data";

const Footer = () => {
  return (
    <div className="pb-5 mt-20 flex  justify-around ">
        <div className="w-1/4 flex flex-col gap-4 ">

      <div className="flex text-white gap-1 items-center cursor-pointer ">
        <Link to={"/"}>
          <IconTargetArrow stroke={1.8} className="h-6  w-6  " />
        </Link>
        <div className="text-xl font-semibold">
          Job
          <span className="bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700  text-transparent bg-clip-text font-bold">
            Hunter
          </span>
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300">
      Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
      </div>
      <div className="text-azure-radiance-700 flex gap-4 [&>div]:bg-mine-shaft-950 [&>div]:p-2 [&>div]:rounded-full   [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-800">
        <div><IconBrandLinkedinFilled className=""/></div>
        <div><IconBrandTelegram/></div>
        <div><IconBrandInstagram/></div>
      </div>
        </div>

        <div className="flex gap-x-52 ">
            {footerLinks.map((items,index)=><div key={index}>
                <div className="text-xl bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700  text-transparent bg-clip-text font-bold">{items.title}</div>
                {items.links.map((link,index)=><div key={index} >
                    <p className="text-white text-sm mt-1 cursor-pointer hover:text-azure-radiance-700 hover:translate-x-2 transition ease-in-out duration-300">{link}</p>
                </div>)}
            </div>)}
        </div>


    </div>
  );
};

export default Footer;
