import React, {useState} from 'react'
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Button, Modal } from 'react-native'

const List = ({navigation}) => {

  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  }

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
        // console.log(image);
        return(
            <TouchableOpacity key={'menu-'+i.name} style={styles.cupcakeContainer} onPress={showModal}>
              <Image key={'i'+i.name} source={image} style={styles.image} />        
              <Text style={styles.menuInfo} key={i.name}>{i.name}</Text>
              <Text style={styles.menuInfo} key={'p'+i.name}>{i.price}</Text>
            </TouchableOpacity>
        )
      })
  )

  const MenuModal = ({infoName, infoPrice}) => (
    <Modal animationType='slide' visible={isOpen} transparent={true}>
        <View style={styles.modalContainer}>
            <TouchableOpacity>
                <Text onPress={()=>setIsOpen(false)}>X</Text>
            </TouchableOpacity>
            <Image  />
            <Text style={styles.menuInfo}>{infoName}</Text>
            <Text style={styles.menuInfo}>{infoPrice}</Text>
            <Text>-1+</Text>

            <Button title='Add to cart' />
        </View>
    </Modal>
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
    fontSize:18,
    textAlign:'center'
  },
  modalContainer:{
    width:300,
    height:400, 
    position: 'absolute',
    top:'50%',
    left:'50%',
    transform: [{translate:[-150, -200]}],
    backgroundColor:'#fff',
    elevation:3,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default List