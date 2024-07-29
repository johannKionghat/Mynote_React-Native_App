import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import ButtonPlus from './ButtonPlus';

export default function ReminderTab() {
  return (
    <View className="flex-1 items-center justify-center p-5 mb-10">
      <View>
        <MaterialCommunityIcons name="clipboard-text-clock" size={hp(13)} color={themeColors.grayOpacity(0.5)} />
      </View>
      <View>
        <Text style={{fontFamily:"MontserratBold", fontSize:hp(3), color:themeColors.black}}>No Reminder</Text>
      </View>
      <View className="mb-8">
        <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.text}}> you haven't created any reminder note yet ! </Text>
      </View>
      <ButtonPlus text={"Create Note"} textColor={themeColors.white} bgColor={themeColors.primary} iconColor={themeColors.white} />
    </View>
  )
}