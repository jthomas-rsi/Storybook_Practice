import React from "react";
import { Meta, Story } from "@storybook/react";

import List, { ListProps } from "../components/List";

export default {
  title: "Example/Practice/List",
  component: List,
  argTypes: {
    items: { control: false },
  },
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const mixedList = Template.bind({});
export const emptyList = Template.bind({});
emptyList.args = {
  items: [],
};
export const loadingList = Template.bind({});
loadingList.args = {
  loading: true,
};
