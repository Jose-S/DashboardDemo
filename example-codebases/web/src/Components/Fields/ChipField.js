import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Chip from "@material-ui/core/Chip";

// ${props => props.theme.typography.size4}
const Pill = styled(Chip)`
	
   ${tw`rounded-lg capitalize w-28 fontSize-4 font-semibold `}
	
   color: ${props => props.theme.palette.pillColors[props.label]};
   background-color: ${props =>
			props.theme.palette.pillColors[props.label].replace("1)", "0.3)")};
			
`;

const Field = styled.a`
	${tw`p-4`}
`;

// record[source]

const ChipField = ({ record = {}, source }) => (
	<Field>
		<Pill label={record[source]} />
	</Field>
);

export default ChipField;
