import { IPalette } from "../palette";
import { ICustomShadows } from "../shadows";

declare module "@mui/material/styles" {
  interface Theme {
    palette: IPalette;
    customShadows: ICustomShadows;
  }
  interface ThemeOptions {
    palette: IPalette;
    customShadows: ICustomShadows;
  }
}
