import React from "react";
import { Story, Meta } from "@storybook/react";

import Button2, { Button2Props } from "../components/Button2";

export default {
    title: 'Example/Practice/My Button',
    component: Button2,
    argTypes:{
        onClick: {action: "button clicked", control: false},
        id: { control: false},
        sx: { control: false },
        startIcon: { control: false },
    }
} as Meta

const Template1: Story<Button2Props> = (args) => <Button2 {...args} />;

export const MyButton_withDisabledControls = Template1.bind({});
MyButton_withDisabledControls.args = {
    id: "MyButton",
    label: "Clickable",
    size: 'medium',
}