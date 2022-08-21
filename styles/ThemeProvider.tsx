import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import {theme, ThemeConfig} from './theme'

export const ThemeProvider: React.FC<PropsWithChildren<unknown>> = ({children}) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
)