import React from 'react'
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'

const List = ({navigation}) => {

  const LIST = [
    {
      title:'Cupcakes',
      list:['Red Velvet', 'Devil', 'Classic Vanilla', 'Raspberry Cinnamon', 'Mint Chocolate', 'Blueberry White Chocolate']
    },
    {
      title:'Cakes',
      list:['Black Forest']
    }
  ]

  const Item = ({items}) => (
      items.list.map(i => {
        const imageName = i.split(' ').join('');
        const image = `require('../assets/images/${imageName}.png')`;
        console.log(image);
        return(
          <View key={i}>
            <Image source={image} />
            <Text>{i}</Text>
          </View>
        )
      })
  )


  return (
    <SafeAreaView>
      <ScrollView>
        {
          LIST.map(category => (
            <View key={category.title}>
              <Text>{category.title}</Text>
              <Item items={category} />
            </View>
          ))
        }
      </ScrollView>
        
        {/* <Button title='back to Home' onPress={()=>navigation.navigate('Home')} /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{},
  cupcakeContainer:{},
  cupcake:{},
})

export default List