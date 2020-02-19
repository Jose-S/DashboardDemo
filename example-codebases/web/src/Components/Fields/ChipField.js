import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import Chip from '@material-ui/core/Chip';

const Pill = styled(Chip)`
   ${tw`rounded-lg text-base font-semibold capitalize`}
	
   color: ${props => props.theme.palette.pillColors[props.label]};
   background-color: ${props =>
			props.theme.palette.pillColors[props.label] + '4D'};
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
