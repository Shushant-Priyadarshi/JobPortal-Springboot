import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talents", url: "find-talents" },
    { name: "Post Jobs", url: "post-jobs" },
    { name: "About Us", url: "about" },
  ];
  return (
    <div className="flex gap-5 h-full items-center text-mine-shaft-300">
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === "/" + link.url
              ? "border-azure-radiance-700 bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(0,120,255,3)]"
              : "border-transparent"
          } border-t-[5px] rounded-b-2xl h-full flex items-center`}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
