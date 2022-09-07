import React from 'react'
import { View, StatusBar } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Statusbar = () => {

  const {top} = useSafeAreaInsets();

  return (
        <View style={{height:top, backgroundColor:'#e795bb'}}>
            <StatusBar backgroundColor='#e795bb' barStyle='light-content' />
        </View>
  )
}

export default Statusbar