import { createMuiTheme } from "@material-ui/core/styles";
import { Diez, DesignLanguage } from "diez-dashboard";
// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "../tailwind.config.js";
// const fullConfig = resolveConfig(tailwindConfig);

function createLigthTheme(ds) {
	// console.log(ds);
	// const ds = new Diez(DesignLanguage).component;
	if (ds !== undefined) {
		const overridings = {
			name: "Light Theme",
			palette: {
				pillColors: {
					coop: ds.palette.primaryColor.color,
					enrolled: ds.palette.greenColor.color,
					dropout: ds.palette.redColor.color,
					leave: ds.palette.orangeColor.color,
					graduated: ds.palette.tertiaryColor.color
				},
				primary: {
					main: ds.palette.primaryColor.color,
					contrastText: ds.palette.textDarkContrast.color
				},
				secondary: {
					main: ds.palette.secondaryColor.color,
					contrastText: ds.palette.textDarkContrast.color
				},
				tertiary: {
					main: ds.palette.tertiaryColor.color,
					contrastText: ds.palette.textDarkContrast.color
				},
				error: {
					main: ds.palette.redColor.color
				},
				warning: {
					main: ds.palette.orangeColor.color
				},
				info: {
					main: ds.palette.primaryColor.color
				},
				success: {
					main: ds.palette.greenColor.color
				},
				text: {
					primary: ds.palette.textPrimary.color,
					secondary: ds.palette.textSecondary.color,
					hint: ds.palette.textTertiary.color
				},
				background: {
					paper: ds.palette.cardBackground.color,
					default: ds.palette.background.color
				}
			},
			typography: {
				fontFamily: ds.strings.fontFamilies,
				fontWeightSemiBold: 600,
				h5: {
					fontFamily: ds.typography.fontStyle10.style.fontFamily,
					fontWeight: ds.typography.fontStyle10.style.fontWeight,
					fontSize: ds.typography.fontStyle10.style.fontSize,
					lineHeight: ds.typography.fontStyle10.style.lineHeight,
					letterSpacing: ds.typography.fontStyle10.style.letterSpacing
				},
				size4: {
					fontFamily: ds.typography.fontStyle4.style.fontFamily,
					fontWeight: ds.typography.fontStyle4.style.fontWeight,
					fontSize: ds.typography.fontStyle4.style.fontSize,
					lineHeight: ds.typography.fontStyle4.style.lineHeight,
					letterSpacing: ds.typography.fontStyle4.style.letterSpacing
				}
			}
		};
		return createMuiTheme(overridings);
	}
	return createMuiTheme({});
}

export default createLigthTheme;
