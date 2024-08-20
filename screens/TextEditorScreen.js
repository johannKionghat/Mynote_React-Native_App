import { View, Text, SafeAreaViewBase, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import NavBarTextEditor from '../components/NavbarTextEditor'
import EditorText from '../components/EditorText'


export default function TextEditorScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style='dark'/>
      <NavBarTextEditor/>
      <EditorText/>
    </SafeAreaView>
  )
}