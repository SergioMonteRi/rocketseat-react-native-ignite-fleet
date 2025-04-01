import { ThemeProvider } from 'styled-components/native'

import { SignIn } from '@screens/SignIn'

import theme from '@theme/index'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  )
}
