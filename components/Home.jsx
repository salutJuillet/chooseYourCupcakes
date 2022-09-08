import React, {useState, useEffect, useRef } from 'react';
import { StyleSheet, SafeAreaView, Image, Text, View, TouchableOpacity, Easing, Animated } from 'react-native';
import { useFonts } from "expo-font";
// import Text from './DefaultText'


const Home = ({navigation}) => {

  /***** floating animation *****/
  const verticalValue = useRef(new Animated.Value(0)).current;
  const float = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(verticalValue, {
          toValue:1,
          duration:700,
          easing:Easing.inOut(Easing.quad),
          useNativeDriver:true  
        }),
        Animated.timing(verticalValue, {
          toValue:2,
          duration:700,
          easing:Easing.inOut(Easing.quad),
          useNativeDriver:true
        })
      ])
    ).start();
  }

  useEffect(()=>{
    float();
  }, [verticalValue])

  const floating = verticalValue.interpolate({
    inputRange:[0, 1, 2],
    outputRange:[-5, 5, -5]
  })

  /***** custom Fonts *****/
  const [fontsLoaded] = useFonts({
    'SUNN Line Free': require('../assets/fonts/SUNNLineFreeRegular.ttf')
  })
  if(!fontsLoaded){
    return null
  }


  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image source={require('../assets/images/cc_three_cupcakes.png')}
                      style={[styles.cupcakeImage, {
                          transform: [{
                            translateY: floating
                          }]
                        }
                      ]} />
      <Image source={require('../assets/images/title.png')}
                      style={styles.titleImage} />
      {
        fontsLoaded && (
            <TouchableOpacity onPress={()=>navigation.navigate('List')}
                              style={styles.button}>
              <View>
                <Text style={styles.buttonText}>Let's Start</Text>
              </View>
            </TouchableOpacity>
        )
      }
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
    width:200,
    height:152,
    position:'absolute',
    top:110,
  },
  titleImage:{
    width:350,
    height:70,
    marginTop:275
  },
  button:{
    backgroundColor:'#1553a3',
    paddingVertical:7,
    paddingHorizontal:20,
    elevation:4,
    marginTop:20
  },
  buttonText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:30,
    fontFamily:'SUNN Line Free'
  },
});

export default Home