import { createContext } from "react";

export const DarkTheme = createContext();

export const DarkThemeProvider = DarkTheme.Provider;
export const DarkThemeConsumer = DarkTheme.Consumer;

export default DarkTheme;
