import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";

export const ThemeTemplete: React.FC = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.blue[800],
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};