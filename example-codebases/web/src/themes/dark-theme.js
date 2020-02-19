import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from "../tailwind.config.js";

// const fullConfig = resolveConfig(tailwindConfig);
const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];
const primaryPurple = purple[500];
const accentPurple = purple.A200;
const darkPurple = purple[900];

function createDarkTheme(ds) {
	if (ds !== undefined) {
		console.log('DARK', ds.palette.caption.colorStyle);
		const overridings = {
			name: 'Dark Theme',
			palette: {
				awesomeColors: {
					primary: ds.palette.caption.color,
					secondary: accentPurple
				},
				primary: {
					light: accentPurple,
					main: primaryPurple,
					dark: darkPurple,
					contrastText: '#fff'
				},
				type: 'dark',
				secondary: {
					light: accentGreen,
					main: ds.palette.caption.color,
					dark: darkGreen,
					contrastText: '#fff'
				}
			}
		};
		console.log('DARK WITH DIEZ');
		return createMuiTheme(overridings);
	}

	const overridings = {
		name: 'Dark Theme',
		palette: {
			awesomeColors: {
				primary: primaryPurple,
				secondary: accentPurple
			},
			primary: {
				light: accentPurple,
				main: primaryPurple,
				dark: darkPurple,
				contrastText: '#fff'
			},
			type: 'dark',
			secondary: {
				light: accentGreen,
				main: primaryGreen,
				dark: darkGreen,
				contrastText: '#fff'
			}
		}
	};

	return createMuiTheme(overridings);
}

// export default createMuiTheme(overridings);
export default createDarkTheme;
