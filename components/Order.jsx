import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'

const Order = ({navigation}) => {
  return (
    <SafeAreaView>
        <Text>Order Page</Text>
        <Button title='Go to cart' onPress={()=>navigation.navigate('Cart')} />
    </SafeAreaView>
  )
}

export default Order