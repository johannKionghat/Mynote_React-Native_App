import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';


export default function PrivacyPolicy() {
  return (
    <View className="flex-row flex-wrap items-center justify-center" style={{width:330}}>
          <Text  style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.text}}>By tap Continue you’re agree to our</Text>
          <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.secondary}}> Terms & Condition </Text>
          <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.text}}> and </Text>
          <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.secondary}}>Privacy policy</Text>
    </View>
  )
}