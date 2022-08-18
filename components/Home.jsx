import React from 'react';
import { StyleSheet, SafeAreaView, Image, Text, View, TouchableOpacity } from 'react-native';


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/cc_three_cupcakes.png')}
             style={styles.cupcakeImage} />
      <View style={styles.titleContainer}>
      <Image source={require('../assets/images/title.png')}
             style={styles.titleImage} />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('List')}
                        style={styles.button}>
        <View>
          <Text style={styles.buttonText}>Let's Start</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e795bb',
    alignItems: 'center'
  },
  cupcakeImage:{
    width:100,
    height:76,
    marginTop:170
  },
  titleContainer:{
    marginTop:5,
    marginBottom:30
  },
  titleImage:{
    width:350,
    height:70
  },
  button:{
    backgroundColor:'#1553a3',
    paddingVertical:7,
    paddingHorizontal:20
  },
  buttonText:{
    color:'#fff',
    fontWeight:'600',
    fontSize:30
  }
});

export default Home