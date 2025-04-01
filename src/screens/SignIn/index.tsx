import { SignInContainer, Slogan, Title } from './styles'

import backgroundImg from '@assets/background.png'

export function SignIn() {
  return (
    <SignInContainer source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>
    </SignInContainer>
  )
}
