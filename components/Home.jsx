import React from 'react';
import { StyleSheet, SafeAreaView, Image, Text, View, TouchableOpacity } from 'react-native';


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/cc_catering_cupcakes.png')}
             style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>CHOOSE YOUR FAVOURITE CUPCAKE!</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Menu')}
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
  image:{
    width:80,
    height:76,
    marginTop:150
  },
  titleContainer:{
    marginTop:5,
    marginBottom:30
  },
  titleText:{
    fontSize:25
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