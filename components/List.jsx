import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'

const List = ({navigation}) => {
  return (
    <SafeAreaView>
        <Text>List Page</Text>
        <Button title='back to Home' onPress={()=>navigation.navigate('Home')} />
    </SafeAreaView>
  )
}

export default List