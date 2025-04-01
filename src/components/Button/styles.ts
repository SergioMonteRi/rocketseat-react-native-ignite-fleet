import styled, { css } from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))``
