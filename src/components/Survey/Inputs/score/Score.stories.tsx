import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Score } from "./index";

export default {
  title: "Inputs/Score",
  component: Score,
} as Meta<typeof Score>;

const Template: StoryFn<typeof Score> = (args) => {
  const [value, setValue] = useState(0);
  return <Score min={1} max={5} value={value} onChange={setValue} />;
};

export const Multiple = Template.bind({});
