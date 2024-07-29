
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HelloScreen from './screens/HelloScreen';
import SettingScreen from './screens/SettingScreen';
import NoteScreen from './screens/NoteScreen';
import StartScreen from './screens/StartScreen';
import CalendarNoteScreen from './screens/CalendarNoteScreen';

const Stack=createNativeStackNavigator();
export default function Navigation() {
  return (
        <Stack.Navigator
        screenOptions={{ headerShown:false}}
        >
            <Stack.Screen name="Hello" component={HelloScreen}/>
            <Stack.Screen name="Start" component={StartScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Note" component={NoteScreen}/>
            <Stack.Screen name="Setting" component={SettingScreen}/>
            <Stack.Screen name="CalendarNote" component={CalendarNoteScreen}/>
        </Stack.Navigator>
  )
}