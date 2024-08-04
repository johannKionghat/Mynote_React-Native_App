import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import NavbarSearch from '../components/NavbarSearch'
import SearchElement from '../components/SearchElement'

export default function SearchScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style='dark'/>
      <NavbarSearch/>
      <SearchElement/>
    </View>
  )
}