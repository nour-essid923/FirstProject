import Auth from'./screens/Auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Accueil from './screens/Accueil';
import Chat from './screens/Chat';


const Stack=createNativeStackNavigator();
export default function App(){
  return(
  <NavigationContainer>
<Stack.Navigator initialRouteName='Accueil'>
  <Stack.Screen name="auth" component={Auth}></Stack.Screen>
  <Stack.Screen name="signup" component={Signup}></Stack.Screen>
  <Stack.Screen name="Accueil" component={Accueil}></Stack.Screen>
  <Stack.Screen name="chat" component={Chat}></Stack.Screen>
</Stack.Navigator>
  </NavigationContainer>
   );
}