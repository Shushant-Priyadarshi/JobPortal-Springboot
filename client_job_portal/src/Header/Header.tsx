import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconSettings, IconTargetArrow } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black  h-20 w-full text-white flex justify-between px-6 items-center">
      {/* ICONS AND LOGO */}
      <div className="flex gap-1 items-center cursor-pointer">
        <Link to={"/"}>
          <IconTargetArrow stroke={1.8} className="h-9  w-9  " />
        </Link>
        <div className="text-3xl font-semibold">
          Job<span className="bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700  text-transparent bg-clip-text font-bold">Hunter</span>
        </div>
      </div>

      {/* LANDING PAGE LINKS */}
      <NavLinks/>

      {/* LANDING PAGE PROFILE */}
      <div className="flex gap-5 items-center ">
        <div className="flex gap-2 items-center">
          <div>Shushant</div>
          <div>
         
            <Avatar src="/assets/avatar-img.png" alt="it's me" />
           
          </div>
        </div>
        <div className="bg-mine-shaft-900 p-1 rounded-full border  border-white cursor-pointer">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1 rounded-full border  border-white cursor-pointer">
        <Indicator size={9} offset={5} color="azure-radiance.7" processing>
          <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
