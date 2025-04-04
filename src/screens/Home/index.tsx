import { CarStaus } from '@components/CarStatus'
import { HomeHeader } from '@components/HomeHeader'

import { Content, HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader />

      <Content>
        <CarStaus />
      </Content>
    </HomeContainer>
  )
}
