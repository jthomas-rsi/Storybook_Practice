import React from "react";
import { Story, Meta } from "@storybook/react";

import ListItem, { ListItemProps } from "../components/ListItem";

export default {
    title: 'Example/Practice/ListItem',
    component: ListItem,

} as Meta;

const Template: Story<ListItemProps> = (args) => < ListItem {...args} />

export const DefaultItem = Template.bind({})
DefaultItem.args = {
    id: 'itemDefault',
    itemText: 'I am a default list item look at me'
}