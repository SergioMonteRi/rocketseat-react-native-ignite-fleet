import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { SignIn } from '@screens/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  )
}
