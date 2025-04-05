import styled from 'styled-components/native'

export const HeaderContainer = styled.View<{ statusBarHeight: number }>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  padding: 0 32px 24px;
  padding-top: ${({ statusBarHeight }) => statusBarHeight + 32}px;

  z-index: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
