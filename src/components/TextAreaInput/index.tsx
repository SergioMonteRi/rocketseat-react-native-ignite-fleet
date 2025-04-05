import { useTheme } from 'styled-components/native'

import { Input, Label, TextAreaInputContainer } from './styles'

import { LicensePlateInputProps } from './types'

export const TextAreaInput = (props: LicensePlateInputProps) => {
  const { label, ...rest } = props

  const { COLORS } = useTheme()

  return (
    <TextAreaInputContainer>
      <Label>{label}</Label>

      <Input
        {...rest}
        autoCapitalize="sentences"
        placeholderTextColor={COLORS.GRAY_400}
        multiline
      />
    </TextAreaInputContainer>
  )
}
