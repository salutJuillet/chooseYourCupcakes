import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'

const Cart = ({navigation}) => {
  return (
    <SafeAreaView>
        <Text>Cart Page</Text>
        <Button title='back to order list' onPress={()=>navigation.navigate('OrderPage')} />
    </SafeAreaView>
  )
}

export default Cart