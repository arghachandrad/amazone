import { useSelector, useDispatch } from "react-redux"
import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core"
import Head from "next/head"
import NextLink from "next/link"
import useStyles from "../utils/styles"
import { globalSelector } from "../redux/global/selector"

const Layout = ({ children, title, description }) => {
  const classes = useStyles()
  const { darkMode } = useSelector(globalSelector)

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h1: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link underline="none">
              <Typography className={classes.brand}>Amazone</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved | Amazone</Typography>
      </footer>
    </ThemeProvider>
  )
}

export default Layout
