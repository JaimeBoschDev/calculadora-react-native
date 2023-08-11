import React from 'react'
import {SafeAreaView, StatusBar, Text, View } from 'react-native'
import { stylesGlobal } from './src/theme/appTheme'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'

const App = () => {
return (
  <SafeAreaView style={stylesGlobal.fondo}>
      <StatusBar backgroundColor='black' barStyle='light-content' />
      <CalculadoraScreen/>
  </SafeAreaView>
)
}


export default App