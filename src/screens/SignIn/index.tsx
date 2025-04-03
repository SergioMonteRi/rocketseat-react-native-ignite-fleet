import { useState } from 'react'
import { Alert } from 'react-native'
import { Realm, useApp } from '@realm/react'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { Button } from '@components/Button'

import { SignInContainer, Slogan, Title } from './styles'

import { IOS_CLIENT_ID, WEB_CLIENT_ID } from '@env'

import backgroundImg from '@assets/background.png'

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
})

export const SignIn = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const app = useApp()

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true)

      const { data } = await GoogleSignin.signIn()

      if (!data?.idToken) throw new Error('No idToken')

      const credentials = Realm.Credentials.jwt(data.idToken)

      await app.logIn(credentials)
    } catch (error) {
      console.log(error)

      Alert.alert('Entrar com Google', 'Não foi possível conectar ao Google')
    } finally {
      setIsAuthenticating(false)
    }
  }

  return (
    <SignInContainer source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>

      <Button
        title="Entrar com Google"
        isLoading={isAuthenticating}
        onPress={handleGoogleSignIn}
      />
    </SignInContainer>
  )
}
