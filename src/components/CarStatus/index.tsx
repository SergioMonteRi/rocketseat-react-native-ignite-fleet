import { Key, Car } from 'phosphor-react-native'

import { CarStatusContainer, IconBox, Message, TextHighlight } from './styles'

import { CartStausProps } from './types'
import { useTheme } from 'styled-components/native'

export const CarStaus = (props: CartStausProps) => {
  const { COLORS } = useTheme()

  const { licensePlate = null } = props

  const Icon = licensePlate ? Key : Car

  const message = licensePlate
    ? `Veículo ${licensePlate} em uso. `
    : `Nenhum veículo em uso. `

  const status = licensePlate ? 'chegada' : 'saída'

  return (
    <CarStatusContainer>
      <IconBox>
        <Icon size={32} color={COLORS.BRAND_LIGHT} />
      </IconBox>

      <Message>
        {message}
        <TextHighlight>
          {`Clique aqui para registrar a ${status} do veículo.`}
        </TextHighlight>
      </Message>
    </CarStatusContainer>
  )
}
