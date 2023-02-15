import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { MultiOption } from "./index";

export default {
  title: "Inputs/MultiOption",
  component: MultiOption,
} as Meta<typeof MultiOption>;

const Template: StoryFn<typeof MultiOption> = (args) => {
  const [value, setValue] = useState<number[]>([]);
  return (
    <MultiOption
      options={[
        {
          value: 1,
          label: "گزینه 1",
        },
        {
          value: 2,
          label: "گزینه ۲",
        },
        {
          value: 3,
          label: "گزینه ۲",
        },
        {
          value: 4,
          label: "گزینه ۲",
        },
        {
          value: 5,
          label: "گزینه ۲",
        },
      ]}
      value={value}
      multiple
      onChange={setValue}
    />
  );
};

export const Multiple = Template.bind({});
