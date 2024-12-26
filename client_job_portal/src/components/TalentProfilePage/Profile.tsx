import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import CertificateCard from "./CertificateCard";

const Profile = (props: any) => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img
          className="rounded-t-2xl"
          alt="bannerIMG"
          src={`/assets/profile/${props.bannerImg}`}
        />
        <img
          className="rounded-full w-48 h-48 -bottom-1/4      absolute left-4 border-8 border-mine-shaft-950"
          alt="bannerIMG"
          src={`/assets/${props.avatarImg}`}
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name} <Button color="azure-radiance.8">Message</Button>
        </div>
        <div className="text-xl flex gap-1  items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />{props.role} &bull;{" "}
          {props.company}
        </div>
        <div className="flex  items-center text-mine-shaft-300 text-lg gap-2">
          <IconMapPin className="h-4 w-4" stroke={1.5} />
          {props.location}
        </div>
      </div>

      <Divider my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>

      <Divider my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills?.map((skill: any, index: any) => (
            <div
              key={index}
              className="bg-azure-radiance-800 text-sm font-medium text-white rounded-full px-3 py-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Divider my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        {props.experience?.map((exp:any,index:any)=><ExperienceCard key={index} {...exp} />)}
      </div>

      <Divider my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        {props.certificate?.map((cer:any,index:any)=> <CertificateCard key={index} {...cer} />)}
       
      </div>
    </div>
  );
};

export default Profile;
