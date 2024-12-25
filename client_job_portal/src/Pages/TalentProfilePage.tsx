import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../components/TalentProfilePage/Profile";
import RecommendedTalents from "../components/TalentProfilePage/RecommendedTalents";

const TalentProfilePage = () => {
  return (
    <div className=" min-h-[100vh] text-white p-4">
      <Divider size="xs" />
      <Link to="/find-talents" className="my-4 inline-block ">
        <div className="bg-mine-shaft-950 rounded-md">
          <Button
            leftSection={<IconArrowLeft size={20} />}
            color="azure-radiance.8"
          >
            Back
          </Button>
        </div>
      </Link>
   

      <div className="flex gap-5">
        <Profile  />
        <RecommendedTalents/>
      </div>
    </div>
  );
};

export default TalentProfilePage;
