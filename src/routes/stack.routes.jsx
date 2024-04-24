import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home";
import { Image, } from "react-native";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
          name="Home" 
         component={Home} 
         options={{
          headerTitle: () => (
            <Image
              source={require('../../assets/logo.png')}
              style={{ width: 120, height: 120}}
            />
          ),
          headerStyle: {
            backgroundColor: '#1c252b',
            alingItems: 'center',
            justifyContent: 'center',
          },
          } }
         />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
      
  );
};

export default StackRoutes;
