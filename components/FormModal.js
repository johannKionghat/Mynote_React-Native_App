import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Touchable, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { themeColors } from '../theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const FormModal = ({ isVisible, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [buttonSelected, setButtonSelected] = useState(false);
  const [bgColor,setBgColor] = useState(themeColors.grayOpacity(0.3));
  const [textColor,setTextColor] = useState(themeColors.text);
  const handlePressButton = ()=>{
    buttonSelected ? (setButtonSelected(false),setBgColor(themeColors.grayOpacity(0.3), setTextColor(themeColors.text))): (setButtonSelected(true), setBgColor(themeColors.primary), setTextColor(themeColors.white));
    console.log(bgColor,textColor);
    return (bgColor,textColor);
  }
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name && email) {
      onSubmit({ name, email });
      setName('');
      setEmail('');
      onClose();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContent} className="flex justify-center">
        <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:themeColors.black}}>Filters</Text>
        <View className="flex-row justify-between gap-2 py-3">
          <TouchableOpacity onPress={handlePressButton} style={{borderRadius:5, backgroundColor:bgColor, width:"48%", padding:10,alignItems:"center"}} >
              <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:textColor}}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderRadius:5, backgroundColor:themeColors.grayOpacity(0.3), width:"48%", padding:10,alignItems:"center"}} >
              <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:themeColors.black}}>Filters</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:themeColors.black}}>Sort by</Text>
        <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:themeColors.black}}>Range</Text>
        <View className="flex-row items-center justify-end gap-4">
          <TouchableOpacity>
            <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:themeColors.grayOpacity(0.5)}}> CANCEL </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:themeColors.primary}}> APPLY </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: themeColors.white,
    padding: 22,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
});

export default FormModal;
