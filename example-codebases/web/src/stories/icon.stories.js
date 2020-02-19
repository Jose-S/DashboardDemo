import React from "react";
import Icon from "../Components/Basic/Icon";
import TestIcon from "../assets/icons/student.svg";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
	title: "Icon",
	component: Icon,
	decorators: [withKnobs]
};

const label = "Color";
const options = {
	Default: "inherit",
	Primary: "primary",
	Secondary: "secondary",
	Acton: "action",
	Error: "error",
	Disable: "disabled",
	None: null
};
const defaultValue = "inherit";
const groupId = "GROUP-ID1";
const value = select(label, options, defaultValue, groupId);

console.log(TestIcon);
export const Default = () => (
	<Icon
		src={TestIcon}
		color={select(label, options, defaultValue, groupId)}
	></Icon>
);
