import { useTheme } from 'styled-components/native'
import { Input, Label, LicensePlateInputContainer } from './styles'

import { LicensePlateInputProps } from './types'

export const LicensePlateInput = (props: LicensePlateInputProps) => {
  const { label, ...rest } = props

  const { COLORS } = useTheme()

  return (
    <LicensePlateInputContainer>
      <Label>{label}</Label>

      <Input
        {...rest}
        maxLength={7}
        autoCapitalize="characters"
        placeholderTextColor={COLORS.GRAY_400}
      />
    </LicensePlateInputContainer>
  )
}
