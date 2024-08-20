
import { Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { themeColors } from '../theme';
import ButtonPlusFloat from './ButtonPlusFloat';
import NotesDisplay from './NotesDisplay';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ButtonPlus from './ButtonPlus';
import { databaseContext, globalContext } from '../context/GlobalContext';

export default function NotesTab() {
  let {categoriesArray, setCategoriesArray, notesArray, setNotesArray, note, setNote, stateEdit, setStateEdit} = useContext(globalContext);
  const navigation = useNavigation();

  const handleNewNote = ()=>{
    setStateEdit(false);
    navigation.navigate("TextEditor");
  };
  if (notesArray.length !== 0){
    return(
      <View className="flex-1">
        <View style={{position:"absolute", bottom:20, right:20, zIndex:1000}}>
          <ButtonPlusFloat onPress={handleNewNote} bgColor={themeColors.primaryOpacity(0.3)} iconColor={themeColors.primary}/>
        </View>
        <NotesDisplay/>
      </View>
    )
  }else{
    return (
        <View className="flex-1 items-center justify-center p-5 mb-10">
          <View>
            <MaterialCommunityIcons name="bookshelf" size={hp(13)} color={themeColors.grayOpacity(0.5)} />
          </View>
          <View>
            <Text style={{fontFamily:"MontserratBold", fontSize:hp(3), color:themeColors.black}}>No Notes</Text>
          </View>
          <View className="mb-8">
            <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.text}}> you haven't created any note yet ! </Text>
          </View>
          <ButtonPlus onPress={handleNewNote} text={"Create Note"} textColor={themeColors.white} bgColor={themeColors.primary} iconColor={themeColors.white} />
        </View>
      )
  }
}