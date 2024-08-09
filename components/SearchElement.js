import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import ButtonPlus from './ButtonPlus';


export default function SearchElement() {
  return (
    <View className="flex-1 items-center justify-center p-5 mb-10">
    <View>
      <MaterialCommunityIcons name="file-find" size={hp(13)} color={themeColors.grayOpacity(0.3)} />
    </View>
    <View className="mb-8">
      <Text style={{fontFamily:"MontserratRegular", fontSize:hp(3), color:themeColors.grayOpacity(0.6)}}>No search notes !</Text>
    </View>
  </View>
  )
}