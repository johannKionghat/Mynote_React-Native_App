import { View, Text,TextInput} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { themeColors } from '../theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Searchbar() {
  return (
    <View className="flex-row items-center px-4 p-2" style={{marginRight:wp(5)}} >
        <View className = "flex-row items-center px-4  py-3 rounded-full border border-gray-500">
        <FontAwesome name="search" size={hp(3)} color={themeColors.black} />
            <TextInput placeholder='Search' className='ml-2 flex-1'/>
        </View>
      </View>
  )
}