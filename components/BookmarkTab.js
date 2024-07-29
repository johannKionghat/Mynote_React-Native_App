import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import ButtonPlus from './ButtonPlus';

export default function BookmarkTab() {
  return (
    <View className="flex-1 items-center justify-center p-5 mb-10">
      <View>
        <MaterialIcons name="bookmarks" size={hp(13)} color={themeColors.grayOpacity(0.5)} />
      </View>
      <View>
        <Text style={{fontFamily:"MontserratBold", fontSize:hp(3), color:themeColors.black}}>No Bookmark</Text>
      </View>
      <View className="mb-8">
        <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.text}}> you haven't created any bookmark note yet ! </Text>
      </View>
      <ButtonPlus text={"Create Note"} textColor={themeColors.white} bgColor={themeColors.primary} iconColor={themeColors.white} />
    </View>
  )
}