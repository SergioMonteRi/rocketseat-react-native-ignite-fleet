import { useRef } from 'react'
import {
  Platform,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { TextAreaInput } from '@components/TextAreaInput'
import { LicensePlateInput } from '@components/LicensePlateInput'

import { Content, DepartureContainer } from './styles'

const KeyboardAvoidingViewBehavior =
  Platform.OS === 'ios' ? 'padding' : 'height'

export const Departure = () => {
  const descriptionRef = useRef<TextInput>(null)

  const handleRegisterDeparture = () => {
    console.log('Registrar saída')
  }

  return (
    <DepartureContainer>
      <Header title="Saída" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={KeyboardAvoidingViewBehavior}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 64 }}>
          <Content>
            <LicensePlateInput
              label="Placa do veículo"
              placeholder="BRA1234"
              returnKeyType="next"
              onSubmitEditing={() => descriptionRef.current?.focus()}
            />

            <TextAreaInput
              inputRef={descriptionRef}
              label="Finalidade"
              placeholder="Vou utilizar o veículo para..."
              returnKeyType="send"
              onSubmitEditing={handleRegisterDeparture}
              submitBehavior="blurAndSubmit"
            />

            <Button title="Registrar saída" onPress={handleRegisterDeparture} />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </DepartureContainer>
  )
}
