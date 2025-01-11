import SelectInput from "./SelectInput";
import { Fields } from "../../../public/assets/data/PostJob";
import { Button, TagsInput } from "@mantine/core";
import TextEditor from "./TextEditor";

const PostJob = () => {
  const select = Fields;
  return (
    <div className="w-4/5 mx-auto">
      <div className="text-2xl font-semibold mb-5">
        Post{" "}
        <span className="bg-gradient-to-r from-azure-radiance-200 to-azure-radiance-700 text-transparent bg-clip-text">
          Jobs
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>
        <TagsInput
          withAsterisk
          label="skills"
          placeholder="Enter skills"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
        />

        <div className="">
          <div className="font-medium text-sm">Job Description</div>
          <TextEditor />
        </div>

        <div className="flex gap-5">
          <Button color="azure-radiance.8">Publish Job</Button>
          <Button color="azure-radiance.8" variant="outline">
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
