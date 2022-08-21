import { ThemeConfig } from "@/styles/theme";

declare module '@emotion/react' {
  export interface Theme extends ThemeConfig {}
}