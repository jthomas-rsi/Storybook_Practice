import React from "react";
import { Story, Meta } from "@storybook/react";

import ListItem, { ListItemProps } from "../components/ListItem";

export default {
  title: "Example/Practice/ListItem",
  component: ListItem,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    id: { control: false },
    secondaryAction: { control: false },
    sx: { control: false },
    handleCheck: { action: "check box clicked" },
    handleStar: { action: "star icon clicked" },
  },
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const DefaultItem = Template.bind({});
DefaultItem.args = {
  id: "defaultI",
  itemText: "I'm a default item",
};
export const CheckedItem = Template.bind({});
CheckedItem.args = {
  id: "checkedI",
  itemText: "<-------- I'm checked, look left ",
  checked: false,
};
export const StarredItem = Template.bind({});
StarredItem.args = {
  id: "starred",
  itemText: "I'm starred look right",
  starred: false,
};
