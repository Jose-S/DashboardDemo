"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {
// 	Color,
// 	DropShadow,
// 	Image,
// 	Toward,
// 	Typograph,
// 	Font,
// 	LinearGradient,
// 	Point2D,
// 	TextAlignment
// } from '@diez/prefabs';
const Margin_1 = require("./components/Margin");
const Design_figma_1 = require("./designs/Design.figma");
/**
 * You can collect anything inside a Diez component. Design tokens specified as
 * properties will be made available in the SDKs transpiled with Diez.
 */
const colors = {
    white: Design_figma_1.designTokens.colors.white,
    black: Design_figma_1.designTokens.colors.gray1,
    gray2: Design_figma_1.designTokens.colors.gray2,
    gray3: Design_figma_1.designTokens.colors.gray3,
    gray4: Design_figma_1.designTokens.colors.gray4,
    gray5: Design_figma_1.designTokens.colors.gray5,
    gray6: Design_figma_1.designTokens.colors.gray6,
    red: Design_figma_1.designTokens.colors.red,
    orange: Design_figma_1.designTokens.colors.orange,
    yellow: Design_figma_1.designTokens.colors.yellow,
    green1: Design_figma_1.designTokens.colors.green1,
    green2: Design_figma_1.designTokens.colors.green2,
    green3: Design_figma_1.designTokens.colors.green3,
    primary: Design_figma_1.designTokens.colors.primary,
    secondary: Design_figma_1.designTokens.colors.secondary,
    tertiary: Design_figma_1.designTokens.colors.tertiary,
    primaryLigth: Design_figma_1.designTokens.colors.background
};
/**
 * You can reference properties from other components.
 */
const palette = {
    // Backgrounds
    background: colors.primaryLigth,
    cardBackground: colors.white,
    // Text
    textPrimary: colors.black,
    textSecondary: colors.gray3,
    textTertiary: colors.gray4,
    textDarkContrast: colors.white,
    textHighEmphasis: colors.primary,
    textLowEmphasis: colors.secondary,
    //Colors
    primaryColor: colors.primary,
    primaryColorLigth: colors.primaryLigth,
    secondaryColor: colors.secondary,
    tertiaryColor: colors.tertiary,
    redColor: colors.red,
    orangeColor: colors.orange,
    yellowColor: colors.yellow,
    greenColor: colors.green2
};
/**
 * All of rich language features of TypeScript are at your disposal; for example,
 * you can define an object to keep track of your fonts.
 */
const Fonts = { ...Design_figma_1.designFonts };
/**
 * Typographs encapsulate type styles with support for a specific font, font size,
 * and color. More typograph properties are coming soon.
 */
// const typography = {...designTokens.typography};
/**
 * In addition to colors and typography, you can also collect other types of
 * design language primitives in components as well — such as images, icons &
 * animations.
 */
const images = {
// logo: Image.responsive('assets/logo.png', 52, 48),
// masthead: Image.responsive('assets/masthead.png', 208, 88)
};
/**
 * You can even collect your own custom components.
 */
const layoutValues = {
    spacingSmall: 8,
    spacingMedium: 32,
    spacingLarge: 64,
    contentMargin: new Margin_1.Margin({
        top: 40,
        left: 10,
        right: 10,
        bottom: 10
    })
};
function getFontFamilies() {
    let fonts = new Set();
    // Add all fonts
    Object.values(Design_figma_1.designFonts).forEach(val => Object.values(val).forEach(val => fonts.add(val.name)));
    // Convert To String
    let fontsString = `'${[...fonts].join("', '")}'`;
    return `${fontsString}, sans-serif`;
}
// console.log(getFontFamilies());
/**
 * You can also define strings.
 */
const strings = {
    title: 'Diez',
    caption: 'Keep your designs in sync with code',
    helper: 'Please Modify the contents of “src/DesignLanguage.ts”.',
    fontFamilies: getFontFamilies()
};
const shadows = {
    ...Design_figma_1.designTokens.shadows
};
/**
 * Note how this component is exported from `index.ts`. Diez compiles these
 * exported components for your apps' codebases.
 *
 * For example:
 *   - If you run `yarn start web` or `npm run start web`, Diez will create a Node package called
 *     `diez-dashboard-web`. Look for `App.jsx` inside `examples/web` to see
 *     how you can use Diez in a web codebase.
 *   - If you run `yarn start ios` or `npm run start ios`, Diez will create a CocoaPods dependency
 *     called `DiezDashboard`. Look for `ViewController.swift` inside
 *     `examples/ios` to see how you can use Diez in an iOS codebase.
 *   - If you run `yarn start android` or `npm run start android`, Diez will create an Android library.
 *     Look for `MainActivity.kt` inside `examples/android` to see how you can
 *     use Diez in an Android codebase.
 */
exports.designLanguage = {
    palette,
    typography: Design_figma_1.designTokens.typography,
    images,
    layoutValues,
    strings,
    shadows
    // loadingAnimation: Lottie.fromJson('assets/loadingAnimation.json', false),
};
//# sourceMappingURL=DesignLanguage.js.map