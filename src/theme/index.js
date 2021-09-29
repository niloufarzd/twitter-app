import {createMuiTheme} from "@material-ui/core/styles";

const colorPrimary = "#5ea9dd";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: colorPrimary,
    }
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "shabnam !important",
      }

    }
  }
})

export default Theme;