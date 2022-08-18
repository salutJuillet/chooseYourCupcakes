import React, {useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Image, Text, View, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font'


const Home = ({navigation}) => {

  const [isFontReady, setIsFontReady] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      "SUNN Line Free": require('../assets/fonts/SUNN-Line-Free-Regular.otf'),
      "SUNN Line Free Bold": require('../assets/fonts/SUNN-Line-Free-Bold.otf')
    });
    setIsFontReady(true);
  }, []);

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
    marginTop:20,
    marginBottom:30
  },
  titleImage:{
    width:350,
    height:70
  },
  button:{
    backgroundColor:'#1553a3',
    paddingVertical:7,
    paddingHorizontal:20,
    elevation:4
  },
  buttonText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:30,
    fontFamily:'SUNN Line Free'
  }
});

export default Home