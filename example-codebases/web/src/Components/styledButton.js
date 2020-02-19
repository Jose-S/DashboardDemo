import styled from "styled-components";
import MatButton from "@material-ui/core/Button";
import tw from "tailwind.macro";

const StyledButton = styled(MatButton)`
	${tw`rounded border-0 text-primary px-6 shadow-md h-12`}
	background-color: ${props => props.theme.palette.secondary.main}
`;

export default StyledButton;
