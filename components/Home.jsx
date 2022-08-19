import React, {useState, useEffect, useRef } from 'react';
import { StyleSheet, SafeAreaView, Image, Text, View, TouchableOpacity, Easing, Animated } from 'react-native';
import * as Font from 'expo-font'


const Home = ({navigation}) => {

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
          easing: Easing.inOut((Easing.quad)),
          useNativeDriver: true
        }).start();
      }
      if(value == 0) {
        Animated.timing(verticalValue, {
          toValue:10,
          duration:600,
          easing: Easing.inOut((Easing.quad)),
          useNativeDriver: true
        }).start();
      }
    })
  })

  const [isFontReady, setIsFontReady] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      // "SUNN Line Free": require('../assets/fonts/SUNN-Line-Free-Regular.otf'),
      "SUNN Line Free": require('../assets/fonts/SUNN-Line-Free-Bold.otf')
    });
    setIsFontReady(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/cc_three_cupcakes.png')}
             style={styles.cupcakeImage} />
      <Animated.Image source={require('../assets/images/title.png')}
                      style={[styles.titleImage, {
                        top:250,
                        transform: [{
                          translateY: verticalValue
                        }]
                      }]} />
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
  titleImage:{
    width:350,
    height:70,
    position:'absolute',
  },
  button:{
    backgroundColor:'#1553a3',
    paddingVertical:7,
    paddingHorizontal:20,
    elevation:4,
    marginTop:95
  },
  buttonText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:30,
    fontFamily:'SUNN Line Free'
  }
});

export default Home