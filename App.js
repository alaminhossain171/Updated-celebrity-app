import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Routes from './Source/Navigatior/Routes';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])
const App = () => {
  return (
    <>
     <Routes />
    </>
  )
}

export default App

const styles = StyleSheet.create({})