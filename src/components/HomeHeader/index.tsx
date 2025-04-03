import { Power } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Greeting, HomeHeaderContainer, Message, Name } from './styles'

export const HomeHeader = () => {
  const { COLORS } = useTheme()

  return (
    <HomeHeaderContainer>
      <Greeting>
        <Message>Olá,</Message>
        <Name>Lucas</Name>
      </Greeting>

      <TouchableOpacity>
        <Power color={COLORS.GRAY_400} size={32} />
      </TouchableOpacity>
    </HomeHeaderContainer>
  )
}
