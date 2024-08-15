import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Aboutscreen from './screens/Aboutscreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Homescreen}
        />
        <Stack.Screen
        name='About'
        component={Aboutscreen}
        initialParams={{
          name: "guest"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}