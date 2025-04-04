import { useNavigation } from '@react-navigation/native'

import { CarStaus } from '@components/CarStatus'
import { HomeHeader } from '@components/HomeHeader'

import { Content, HomeContainer } from './styles'

export const Home = () => {
  const { navigate } = useNavigation()

  const handleRegisterMovent = () => {
    navigate('departure')
  }

  return (
    <HomeContainer>
      <HomeHeader />

      <Content>
        <CarStaus onPress={handleRegisterMovent} />
      </Content>
    </HomeContainer>
  )
}
