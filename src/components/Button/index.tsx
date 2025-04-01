import { ButtonContainer, LoadIndicator, Title } from './styles'

import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  const { title, isLoading = false, ...rest } = props

  return (
    <ButtonContainer activeOpacity={0.7} disabled={isLoading} {...rest}>
      {isLoading ? <LoadIndicator /> : <Title>{title}</Title>}
    </ButtonContainer>
  )
}
