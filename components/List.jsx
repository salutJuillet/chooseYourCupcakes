import React from 'react'
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'

const List = ({navigation}) => {

  const LIST = [
    {
      title:'Cupcakes',
      list:[
        {name:'Red Velvet', price:'2.95'},
        {name:'Devil', price:'3.00'},
        {name:'Classic Vanilla', price:'2.80'},
        {name:'Raspberry Cinnamon', price:'2.95'},
        {name:'Mint Chocolate', price:'2.80'},
        {name:'Blueberry White Chocolate', price:'2.95'}
      ]
    },
    {
      title:'Cakes',
      list:[
        {name:'Black Forest', price:'39.00'}
      ]
    }
  ]

  const Item = ({items}) => (
      items.list.map(i => {
        const imageName = i.name.split(' ').join('');
        const image = `require('../assets/images/${imageName}.png')`;
        console.log(image);
        return(
          <TouchableOpacity key={i.name} style={styles.cupcakeContainer}>
            <Image 
                source={image} 
                style={styles.image} 
            />
            <Text sytle={styles.menuInfo}>{i.name}</Text>
            <Text sytle={styles.menuInfo}>{i.price}</Text>
          </TouchableOpacity>
        )
      })
  )


  return (
    <SafeAreaView style={{paddingBottom:20}}>
      <ScrollView>
        {
          LIST.map(category => (
            <View key={category.title} style={styles.titleContainer}>
              <Text style={styles.titleText}>{category.title}</Text>
              <View style={styles.list}>
                <Item items={category} />
              </View>
            </View>
          ))
        }
      </ScrollView>
        
        {/* <Button title='back to Home' onPress={()=>navigation.navigate('Home')} /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  titleText:{
    fontSize:26,
    marginVertical:20,
    fontWeight:'bold'
  },
  list:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center'
  },
  cupcakeContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
    width:200
  },
  image:{
    width:120,
    height:150,
  },
  menuInfo:{
    marginVertical:5,
    fontSize:18
  }
})

export default List