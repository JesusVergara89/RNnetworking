import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Aboutscreen from './screens/Aboutscreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: "#6a51ae"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerRight: () => (
          <Pressable onPress={()=> alert('Menu btn press')} >
            <Text style={{color: "white", fontSize: 16}} >Menu</Text>
          </Pressable>
        ),
        contentStyle: {
          backgroundColor: "#e8e4"
        }
      }}>
        <Stack.Screen
        name='Home'
        component={Homescreen}
        options={{
          title: "welcome home",
        }}
        />
        <Stack.Screen
        name='About'
        component={Aboutscreen}
        initialParams={{
          name: "guest"
        }}
        //options={({route})=>({
        // title: route.params.name
        //})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}