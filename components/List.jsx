import React from 'react'
import { SafeAreaView, ScrollView, SectionList, View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'

const List = ({navigation}) => {

  const LIST = [
    {
      title:'Cupcakes',
      lists:['Red Velvet', 'Devil', 'Classic Vanilla', 'Raspberry Cinnamon', 'Mint Chocolate', 'Blueberry White Chocolate'],
      img:['RedVelvet.png', 'Devil.png', 'ClassicVanilla.png', 'RasberryCinnamon.png', 'MintChocolate.png', 'BlueberryWhiteChocolate.png']
    },
    {
      title:'Cakes',
      lists:['Black Forest'],
      img:['BlackForest.png']
    }
  ]

  const Item = ({title}) => {
    // const {title, lists, img } = item;
    <View style={styles.cupcakeContainer}>
      {/* <Image source={require(`../assets/images/${img}`)} style={styles.cupcake} />
      <Text>{lists}</Text> */}
      <Text>{title}</Text>
    </View>
  }

  return (
    <SafeAreaView>
      <SectionList sections={LIST}
                   keyExtractor={(item, index) => item + index}
                   renderItem={({item}) => <Item title={item} />}
                   renderSectionHeader={({section:{title}}) => (
                    <Text style={styles.header}>{title}</Text>
                   )} />
        
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