import React from "react";
import { Story, Meta } from "@storybook/react";

import ListItem, { ListItemProps } from "../components/ListItem";

export default {
  title: "Example/Practice/ListItem",
  component: ListItem,
  parameters: { controls: { sort: "alpha" } },
  argTypes: {
    id: { control: false },
    secondaryAction: { control: false },
    sx: { control: false },
    starred: { control: false },
    checked: { control: false },
    handleCheck: { action: "checkbox clicked", control: false },
    handleStar: { action: "starr icon clicked", control: false },
  },
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const DefaultItem = Template.bind({});
DefaultItem.args = {
  id: "default",
  itemText: "I'm a default item",
};
export const CheckedItem = Template.bind({});
CheckedItem.args = {
  id: "checked",
  itemText: "When checked the task becomes marked",
  checked: true,
  starred: false,
};
export const StarredItem = Template.bind({});
StarredItem.args = {
  id: "starred",
  itemText: "When starred the task is struck out",
  starred: true,
  checked: false,
};
