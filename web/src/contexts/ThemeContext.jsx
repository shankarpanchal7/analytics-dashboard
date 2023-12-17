import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";

export default class ThemeContext extends React.Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme || theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

ThemeContext.propTypes = {
  children: React.Children,
  theme: Object,
};