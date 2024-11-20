import { Button, rem, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

const Subscribe = () => {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <div className="mt-20  mx-auto max-w-5xl p-6 rounded-xl border border-azure-radiance-700 shadow-lg ">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold text-white">
          Never Miss Any{" "}
          <span className="bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700 bg-clip-text text-transparent">
            Job Updates
          </span>
        </h2>
        <p className="text-sm text-mine-shaft-200 mt-2">
          Stay updated with the latest job postings directly in your inbox.
        </p>
      </div>
      
      {/* Form Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <TextInput
          size="lg"
          leftSection={icon}
          placeholder="Enter your email"
          classNames={{
            input: "text-base",
          }}
          
        />
        <Button
          size="lg"
          radius="md"
          className="text-sm sm:text-base "
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
