import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";

const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];
const primaryPurple = purple[500];
const accentPurple = purple.A200;
const darkPurple = purple[900];

function createLigthTheme(ds) {
	if (ds !== undefined) {
		console.log("LIGTH", ds.palette.caption.colorStyle);
		const overridings = {
			name: "Light Theme",
			palette: {
				awesomeColors: {
					primary: "#fe6b8b",
					secondary: "#ff8e53"
				},
				pillColors: {
					coop: "#2B2B90",
					enrolled: "#27AE60",
					dropout: "#EB5757",
					leave: "#F2994A",
					graduated: "#072364"
				},
				primary: {
					light: accentGreen,
					main: primaryGreen,
					dark: darkGreen,
					contrastText: "#fff"
				},
				secondary: {
					light: accentPurple,
					main: primaryPurple,
					dark: darkPurple,
					contrastText: "#fff"
				}
			}
		};
		return createMuiTheme(overridings);
	}
	return createMuiTheme({});
}

export default createLigthTheme;
