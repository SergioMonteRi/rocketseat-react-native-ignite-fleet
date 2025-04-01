import styled from 'styled-components/native'

import theme from '@theme/index'

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${theme.COLORS.GRAY_800};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: theme.COLORS.BRAND_LIGHT,
  size: 'large',
}))``
