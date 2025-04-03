import { Greeting, HomeHeaderContainer, Message, Name } from './styles'

export const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      <Greeting>
        <Message>Olá,</Message>
        <Name>Lucas</Name>
      </Greeting>
    </HomeHeaderContainer>
  )
}
