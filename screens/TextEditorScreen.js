import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import NavBarTextEditor from '../components/NavbarTextEditor'

export default function TextEditorScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style='dark'/>
      <NavBarTextEditor/>
    </View>
  )
}