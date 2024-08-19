import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import ButtonCategorie from './ButtonCategorie';
import { db, db2 } from '../constants/db2';
import { useNavigation } from '@react-navigation/native';
import { databaseContext } from '../context/DatabaseContext';
import { getAllNotes } from '../db/crud';

export default  NotesDisplay = () => {
  
  const navigation = useNavigation ();
  const notes = db2["notes"];
  let {categoriesArray, setCategoriesArray, notesArray, setNotesArray} = useContext(databaseContext);

  useEffect(()=>{
    let AllNotes = getAllNotes();
    setNotesArray(AllNotes);
  },[])

  const handleNotesView = (item)=>{
    // passage des donées en format JSON
    item = JSON.stringify(item);
    navigation.navigate("TextEditor", {item});
  }
  return (
    <View className="flex-1 p-3">
    <FlatList
      data={notesArray}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>handleNotesView(item)} style={{ width: '48%', backgroundColor:themeColors.white, borderWidth: 1, borderRadius:5, margin:3, padding:10, borderColor:themeColors.grayOpacity(0.3)}}>
          <Text style={{fontFamily:"MontserratBold", fontSize:hp(2), color:themeColors.black}} className="font-bold text-lg text-black">{item.title}</Text>
          <Text>{item.id}</Text>
          <View className="py-4" style={{height:180}}>
            <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.grayOpacity(0.8)}} className="text-base text-text mt-2">{item.content}</Text>
          </View>
          <ButtonCategorie text={categoriesArray[item.id-1]["name"]} bgColor={themeColors.grayOpacity(0.2)} />
        </TouchableOpacity>
      )}
    />
  </View>
  );
};

