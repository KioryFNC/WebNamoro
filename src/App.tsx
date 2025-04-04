import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";

import { WebDating } from "./pages/WebDating";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <WebDating />
    </ThemeProvider>
  )
}