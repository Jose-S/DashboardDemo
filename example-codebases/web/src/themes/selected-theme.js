import createDarkTheme from "./dark-theme";
import createLigthTheme from "./light-theme";

function selectTheme(ds, theme) {
	console.log("SELECT THEME FUNC", theme);
	switch (theme) {
		case "dark":
			return createDarkTheme(ds);
		default:
			return createLigthTheme(ds);
	}
}

export default selectTheme;
