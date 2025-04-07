import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { TextAreaInput } from '@components/TextAreaInput'
import { LicensePlateInput } from '@components/LicensePlateInput'

import { Content, DepartureContainer } from './styles'

export const Departure = () => {
  return (
    <DepartureContainer>
      <Header title="Saída" />

      <Content>
        <LicensePlateInput label="Placa do veículo" placeholder="BRA1234" />

        <TextAreaInput
          label="Finalidade"
          placeholder="Vou utilizar o veículo para..."
        />

        <Button title="Registrar saída" />
      </Content>
    </DepartureContainer>
  )
}
