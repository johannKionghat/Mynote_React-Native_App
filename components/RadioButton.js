import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
export default RadioButton = ({ label, value, onPress, selected }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
        <View style={{
          height: 24,
          width: 24,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: selected ? '#000' : '#ccc',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10
        }}>
          {selected ? <View style={{
            height: 12,
            width: 12,
            borderRadius: 5,
            backgroundColor: '#000',
          }} /> : null}
        </View>
        <Text className="my-2" style={{fontFamily:"MontserratBold", fontSize:hp(1.8), color:themeColors.grayOpacity(0.7)}}>{label}</Text>
      </TouchableOpacity>
    );
  };
