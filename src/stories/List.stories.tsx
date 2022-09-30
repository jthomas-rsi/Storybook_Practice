import React from "react";
import { Meta, Story } from "@storybook/react";

import List, { ListProps } from "../components/List";
import * as ListItemStories from "./ListItem.stories";

export default {
  title: "Example/Practice/List",
  component: List,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    items: { control: false },
    sx: { control: false },
    loading: { control: false },
  },
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const mixedList = Template.bind({});
mixedList.args = {
  items: [
    {
      ...ListItemStories.DefaultItem.args,
      id: "1.2",
      itemText: "Update Default Item",
    },
    {
      ...ListItemStories.CheckedItem.args,
      id: "2.2",
      itemText: "Update Checked",
    },
    {
      ...ListItemStories.StarredItem.args,
      id: "3.2",
      itemText: "Update Starred Item",
    },
  ],
};

export const emptyList = Template.bind({});
emptyList.args = {
  items: [],
};
export const loadingList = Template.bind({});
loadingList.args = {
  loading: true,
};
