import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core"
import { useEffect } from "react"
import "../styles/globals.css"
import { store } from "../redux/store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
