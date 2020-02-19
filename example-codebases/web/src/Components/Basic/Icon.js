import React, { useRef } from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

// NEED TO REMOVE FILL PROP FRO PATH FOR EACH ICON - Still trying to find a solution

const Icon = ({
	src,
	color = "inherit",
	size = "default",
	accessibleTitle,
	htmlColor
}) => {
	// Conditional logic to determine props to pass down

	var inputProps = {
		component: src,
		titleAccess: accessibleTitle ? accessibleTitle : undefined,
		htmlColor: htmlColor ? htmlColor : undefined,
		color: htmlColor ? undefined : color
	};

	// spread declaration to add props
	return <SvgIcon component={src} fontSize={size} {...inputProps}></SvgIcon>;
};

export default Icon;
