import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Entypo, FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import FormFilter from './FormFilter';

export default function NavBar() {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const handleOpenModal =()=>{
    setIsVisible(!isVisible);
  }
  const onClose=()=>{
    setIsVisible(!isVisible);
  }
  return (
    <View className="flex-row justify-between items-center mt-5 py-5 px-3 bg-white">
      <FormFilter isVisible={isVisible} onClose={onClose}   />
      <View className="flex-row gap-2 items-center">
        <TouchableOpacity>
          <MaterialCommunityIcons name="note-text-outline" color={themeColors.black} size={hp(4)} />
        </TouchableOpacity>
        <Text style={{ fontFamily: "MontserratBold", fontSize: hp(2.5), color: themeColors.black }}>MyNote</Text>
      </View>
      <View className="flex-row justify-between items-center gap-4">
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
          <FontAwesome name="search" size={hp(3)} color={themeColors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOpenModal}>
          <FontAwesome6 name="arrow-down-wide-short" size={hp(3)} color={themeColors.black} />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('CalendarNote')}>
          <Ionicons name="calendar-sharp" size={hp(3)} color={themeColors.black} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
