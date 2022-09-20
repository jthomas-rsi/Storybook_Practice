import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../components/Button';
import Button2, { Button2Props } from '../components/Button2'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: "I've been clicked"}
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const MyTemplate: Story<Button2Props> = (args) => <Button2 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const MyButton = MyTemplate.bind({});
MyButton.args = {
  label: 'Home Made',
  id: 'btnComp',
}