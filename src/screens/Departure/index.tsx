import { useRef } from 'react'
import { TextInput } from 'react-native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { TextAreaInput } from '@components/TextAreaInput'
import { LicensePlateInput } from '@components/LicensePlateInput'

import { Content, DepartureContainer } from './styles'

export const Departure = () => {
  const descriptionRef = useRef<TextInput>(null)

  const handleRegisterDeparture = () => {
    console.log('Registrar saída')
  }

  return (
    <DepartureContainer>
      <Header title="Saída" />

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
    </DepartureContainer>
  )
}
