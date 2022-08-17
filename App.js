import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
        <Tab.Navigator screenOptions={[
          {headerShown: false},
          ({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                  let iconName;

                  if(route.name === 'Menu') {
                    iconName = focused ? 'focused 아이콘' : 'focus out 아이콘'
                  }else if(route.name === 'Order') {
                    iconName = focused ? 'focused 아이콘' : 'focus out 아이콘'
                  }

                  return <MaterialCommunityIcons name={아이콘이름} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })
            ]}>
          <Tab.Screen name='Menu'>
            {
              () => (
                <MenuStack.Navigator>
                  <MenuStack.Screen name='Home' component={Home} />
                  <MenuStack.Screen name='List' component={List} />
                </MenuStack.Navigator>
              )
            }
          </Tab.Screen>

          <Tab.Screen name='Order'>
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