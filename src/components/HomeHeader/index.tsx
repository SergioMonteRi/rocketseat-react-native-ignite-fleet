import { Power } from 'phosphor-react-native'
import { useUser, useApp } from '@realm/react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Greeting, HomeHeaderContainer, Message, Name, Picture } from './styles'

export const HomeHeader = () => {
  const { COLORS } = useTheme()
  const { profile } = useUser()

  const app = useApp()
  const insents = useSafeAreaInsets()

  const handleLogout = async () => {
    await app.currentUser?.logOut()
  }

  return (
    <HomeHeaderContainer statusBarHeight={insents.top}>
      <Picture
        source={{ uri: profile?.pictureUrl }}
        placeholder="L184iAoffQof00ayfQay~qj[fQj["
      />

      <Greeting>
        <Message>Olá,</Message>
        <Name>{profile?.name}</Name>
      </Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
        <Power color={COLORS.GRAY_400} size={32} />
      </TouchableOpacity>
    </HomeHeaderContainer>
  )
}
