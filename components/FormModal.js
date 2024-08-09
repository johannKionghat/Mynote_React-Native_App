import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { themeColors } from '../theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RadioGroupComponent2 from './RadioGroupComponent2';
import RadioGroupComponent1 from './RadioGroupComponent1';
import { FormContext } from './FormContext';


const FormModal = ({ isVisible, onClose, onSubmit }) => {
  const { range, setRange, sortBy, setSortBy } = useContext(FormContext);
 
  const handleSubmit = () => {
    if (range && sortBy) {
      onSubmit({ range, sortBy });

      onClose();
    } else {
      console.log(range, sortBy);
      alert('Please fill in all fields');
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContent} className="flex justify-center">        
        <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:themeColors.black}}>Sort by</Text>
        <View className="flex-row justify-between gap-2 py-3">
        <RadioGroupComponent1/>
        </View>
        <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:themeColors.black}}>Range</Text>
        <View className="flex-row justify-between gap-2 py-3">
        <RadioGroupComponent2 range={null}/>
        </View>
        <View className="flex-row items-center justify-end gap-4">
          <TouchableOpacity onPress={onClose}>
            <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:themeColors.grayOpacity(0.5)}}> CANCEL </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit}>
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
