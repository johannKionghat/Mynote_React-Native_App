import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import NavBarCalendar from '../components/NavBarCalendar'
import { StatusBar } from 'expo-status-bar'
import ExplainableCalendar from '../components/ExplainableCalendar'

export default function CalendarNoteScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style='dark'/>
      <NavBarCalendar/>
      <ExplainableCalendar/>
    </SafeAreaView>
  )
}