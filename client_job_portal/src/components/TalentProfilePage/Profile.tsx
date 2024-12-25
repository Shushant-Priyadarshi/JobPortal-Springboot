import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import CertificateCard from "./CertificateCard";

const Profile = () => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img
          className="rounded-t-2xl"
          alt="bannerIMG"
          src="/assets/profile/banner.jpg"
        />
        <img
          className="rounded-full w-48 h-48 -bottom-1/4      absolute left-4 border-8 border-mine-shaft-950"
          alt="bannerIMG"
          src="/assets/avatar-img.png"
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          Jarrod Wood <Button color="azure-radiance.8">Message</Button>
        </div>
        <div className="text-xl flex gap-1  items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          Software Enginner &bull; Google
        </div>
        <div className="flex  items-center text-mine-shaft-300 text-lg gap-2">
          <IconMapPin className="h-4 w-4" stroke={1.5} />
          New York
        </div>
      </div>

      <Divider my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
          consequatur dolor pariatur est expedita impedit ut inventore ipsum.
          Provident quisquam in soluta cumque totam, error, debitis odit hic
          dicta consectetur deserunt eius iste voluptatum Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Magnam aperiam, at, adipisci
          consequatur debitis impedit quod sint iste odit, nemo tempora! Aperiam
          doloribus veritatis quas reprehenderit repudiandae provident ea aut,
          similique nostrum illo. Inventore, id.
        </div>
      </div>

      <Divider my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          <div className="bg-azure-radiance-800 text-sm font-medium text-white rounded-full px-3 py-1">React</div>
          <div className="bg-azure-radiance-800 text-sm font-medium text-white rounded-full px-3 py-1">SpringBoot</div>
          <div className="bg-azure-radiance-800 text-sm font-medium text-white rounded-full px-3 py-1">MongoDB</div>
        </div>
      </div>

      <Divider my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <ExperienceCard/>
        </div>


        <Divider my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <CertificateCard/>
        </div>
    </div>
  );
};

export default Profile;
