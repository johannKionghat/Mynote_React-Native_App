import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Entypo, FontAwesome, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import FormModal from './FormModal';

export default function NavBar() {
  const navigation = useNavigation();
  // Création du modal formulaire filter
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = (data) => {
    console.log('Form Data:', data);
    // Vous pouvez traiter les données du formulaire ici
  };

  return (
    <View className="flex-row justify-between items-center mt-5 py-5 px-3 bg-white">
      <FormModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
      <View className="flex-row gap-3 items-center">
        <TouchableOpacity>
          <MaterialIcons name="notes" color={themeColors.black} size={hp(5)} />
        </TouchableOpacity>
        <Text style={{ fontFamily: "MontserratBold", fontSize: hp(2.5), color: themeColors.black }}>All Notes</Text>
      </View>
      <View className="flex-row justify-between items-center gap-4">
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
          <FontAwesome name="search" size={hp(3)} color={themeColors.black} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleOpenModal}>
          <FontAwesome6 name="arrow-down-wide-short" size={hp(3)} color={themeColors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CalendarNote')}>
          <Ionicons name="calendar-sharp" size={hp(3)} color={themeColors.black} />
        </TouchableOpacity>
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
