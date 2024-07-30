import { View, Text } from 'react-native';
import React from 'react';
import NavBar from '../components/NavBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import Tab from '../components/Tab';
import ButtonPlusFloat from '../components/ButtonPlusFloat';


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
        <StatusBar barStyle={"dark-content"}/>
        <View style={{paddingTop:hp(3)}}>
        {/* Navbar */}
        <NavBar/>
        </View>
        <Tab/>
    </SafeAreaView>    
  );
}