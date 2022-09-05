import React, {useState, useEffect, useRef } from 'react';
import { StyleSheet, SafeAreaView, Image, Text, View, TouchableOpacity, Easing, Animated } from 'react-native';
import * as Font from "expo-font";
// import Text from './DefaultText'


const Home = ({navigation}) => {

  /***** floating animation *****/
  const verticalValue = useRef(new Animated.Value(0)).current;
  const float = () => {
    Animated.loop(
      Animated.timing(verticalValue, {
        toValue:10,
        duration:600,
        easing:Easing.inOut(Easing.quad),
        useNativeDriver: true
      })
    ).start();
  }

  useEffect(()=>{
    float();
    verticalValue.addListener(({value}) => {
      if(value == 10) {
        Animated.timing(verticalValue, {
          toValue:0,
          duration:600,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true
        }).start();
      }
      if(value == 0) {
        Animated.timing(verticalValue, {
          toValue:10,
          duration:600,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true
        }).start();
      }
    })
  })

  /***** custom Fonts *****/
  const [isFontReady, setIsFontReady] = useState(false);
  const getFonts = async () => {
    await Font.loadAsync({
      "SUNNLineFree": require('../assets/fonts/SUNNLineFreeRegular.ttf'),
    });
  }
  useEffect(()=>{
    getFonts();
    setIsFontReady(true);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image source={require('../assets/images/cc_three_cupcakes.png')}
                      style={[styles.cupcakeImage, {
                          transform: [{
                            translateY: verticalValue
                          }]
                        }
                      ]} />
      <Image source={require('../assets/images/title.png')}
                      style={styles.titleImage} />
      {
        isFontReady && (
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
  },
});

export default Home