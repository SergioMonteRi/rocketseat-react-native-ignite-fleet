import { TextInput, TextInputProps } from 'react-native'

export type LicensePlateInputProps = TextInputProps & {
  label: string
  inputRef?: React.RefObject<TextInput>
}
