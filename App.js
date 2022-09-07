import React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Home from './components/Home';
import List from './components/List';
import OrderPage from './components/Order';
import Cart from './components/Cart';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
                        headerShown:false,
                        tabBarActiveTintColor:'#fef7ea',
                        tabBarBackground:()=>(
                          <View style={{backgroundColor:'#1553a3', flex:1}} />
                        )
                       }}>
          <Tab.Screen name='Menu'
                      options={{
                        tabBarIcon:({color}) => (
                          <MaterialCommunityIcons name="cupcake" size={26} color={color} />
                        )
                      }}>
            {
              () => (
                <Stack.Navigator>
                  <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
                  <Stack.Screen name='List' component={List} />
                </Stack.Navigator>
              )
            }
          </Tab.Screen>

          <Tab.Screen name='Order'
                      options={{
                        tabBarIcon:({color}) => (
                          <MaterialCommunityIcons name="book-open-variant" size={26} color={color} />
                        )
                      }}>
            {
              () => (
                <Stack.Navigator>
                  <Stack.Screen name='OrderPage' component={OrderPage} />
                  <Stack.Screen name='Cart' component={Cart} />
                </Stack.Navigator>
              )
            }
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  );
}