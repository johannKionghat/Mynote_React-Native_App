import React, { useEffect, useState } from 'react';
import { View, Text, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import PrivacyPolicy from '../components/PrivacyPolicy';

export default function HelloScreen() {
  const navigation = useNavigation();
  return (
      <View className="flex-1 items-center justify-between">
        <View className="flex-1 items-center justify-end gap-5">
          <Image className="rounded-full" style={{width:100, height:100}} source={require('../assets/images/mynote.png')} />
          <Text  style={{fontFamily:"MontserratRegular", fontSize:hp(2.5), color:themeColors.text}}>No more memory loss</Text>
        </View>
        <View className="flex-1 items-center justify-center mt-10 gap-8">
          <Button onPress={()=> navigation.navigate("Start")} text={"CONTINUE"} textColor={"white"} bgColor={themeColors.primary} bgColorhover={themeColors.secondary} />
          <PrivacyPolicy/>
        </View>
      </View>
    );
}


