/* eslint-disable camelcase */

import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import { SignIn } from '@screens/SignIn'

import { Loading } from '@components/Loading'

import theme from '@theme/index'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  if (!fontsLoaded) {
    return (
      <>
        <Loading />
      </>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

      <SignIn />
    </ThemeProvider>
  )
}
