import { Image } from 'expo-image'
import styled from 'styled-components/native'

export const HomeHeaderContainer = styled.View<{ statusBarHeight: number }>`
  width: 100%;
  padding: 32px;
  padding-top: ${({ statusBarHeight }) => statusBarHeight + 32}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Greeting = styled.View`
  flex: 1;
  margin-left: 12px;
`

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Picture = styled(Image)`
  width: 54px;
  height: 54px;
  border-radius: 7px;
`
