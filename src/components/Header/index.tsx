import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HeaderContainer, Title } from './styles'

import { HeaderProps } from './types'

export const Header = (props: HeaderProps) => {
  const { title } = props

  const { COLORS } = useTheme()
  const { goBack } = useNavigation()
  const insets = useSafeAreaInsets()

  const handleGoBack = () => {
    goBack()
  }

  return (
    <HeaderContainer statusBarHeight={insets.top}>
      <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
        <ArrowLeft size={24} weight="bold" color={COLORS.BRAND_LIGHT} />
      </TouchableOpacity>

      <Title>{title}</Title>
    </HeaderContainer>
  )
}
