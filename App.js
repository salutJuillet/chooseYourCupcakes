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
const MenuStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();



export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
                        headerShown:false,
                        tabBarActiveTintColor:'#fef7ea',
                        tabBarBackground:()=>(
                          <View style={{backgroundColor:'#1553a3', flex:1}} />
                        ),
                        tabBarStyle:{height:70}
                       }}>
          <Tab.Screen name='Menu'
                      options={{
                        tabBarIcon:({color}) => (
                          <MaterialCommunityIcons name="cupcake" size={30} color={color} />
                        ),
                        tabBarLabelStyle:{
                          position:'absolute',
                          top:55
                        }
                      }}>
            {
              () => (
                <MenuStack.Navigator>
                  <MenuStack.Screen name='Home' component={Home} options={{headerShown:false}} />
                  <MenuStack.Screen name='List' component={List} />
                </MenuStack.Navigator>
              )
            }
          </Tab.Screen>

          <Tab.Screen name='Order'
                      options={{
                        tabBarIcon:({color}) => (
                          <MaterialCommunityIcons name="book-open-variant" size={30} color={color} />
                        ),
                        tabBarLabelStyle:{
                          position:'absolute',
                          top:55
                        }
                      }}>
            {
              () => (
                <OrderStack.Navigator>
                  <OrderStack.Screen name='OrderPage' component={OrderPage} />
                  <OrderStack.Screen name='Cart' component={Cart} />
                </OrderStack.Navigator>
              )
            }
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  );
}