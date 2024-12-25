import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const TalentProfilePage = () => {
  return (
    <div className=" min-h-[100vh] text-white p-4">
      <Divider size="xs" />
      <Link to="/find-talents" className="my-4 inline-block ">
        <div>
          <Button
            leftSection={<IconArrowLeft size={20} />}
            color="azure-radiance.7"
            variant="outline"
          >
            Back
          </Button>
        </div>
      </Link>
      <Divider size="xs" />
    </div>
  );
};

export default TalentProfilePage;
