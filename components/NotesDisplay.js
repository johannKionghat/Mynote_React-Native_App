import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import ButtonCategorie from './ButtonCategorie';
import { useNavigation } from '@react-navigation/native';
import { globalContext } from '../context/GlobalContext';
import { getAllCategories, getAllNotes, getCategorybyId } from '../db/crud';
import RenderHTML from 'react-native-render-html';

export default  NotesDisplay = () => {
  let {categoriesArray, setCategoriesArray, notesArray, setNotesArray, note, setNote, stateEdit, setStateEdit, setCategory} = useContext(globalContext);
  const navigation = useNavigation ();
  
  useEffect(()=>{
    async function fetchData(){
      let AllNotes = await getAllNotes();
      setNotesArray(AllNotes);
    };
    fetchData();
  },[]);

  const handleNotesView = async (item)=>{
    setNote(item);
    setStateEdit(true);
    let category = await getCategorybyId(item.category_id);
    setCategory(category);
    navigation.navigate("TextEditor");
  }
  return (
    <View className="flex-1 p-3">
    <FlatList
      data={notesArray}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={ async ({ item }) => {
        let category = await getCategorybyId(item.category_id);
        return(
          <TouchableOpacity onPress={()=>handleNotesView(item)} style={{ width: '48%', backgroundColor:themeColors.white, borderWidth: 1, borderRadius:5, margin:3, padding:10, borderColor:themeColors.grayOpacity(0.3)}}>
            <RenderHTML
                  contentWidth={wp(48)}
                  source={{ html: item.title }} // Le contenu HTML de la note
                  ignoredDomTags={['input', 'form']} 
                  baseStyle={{
                    fontFamily: "MontserratBold",
                    fontWeight:"bold",
                    fontSize: hp(2),
                    color:themeColors.black,
                  }}
                />
          <View className="py-4" style={{height:180, overflow:'hidden',marginBottom:10}}>
          <RenderHTML
                  contentWidth={wp(48)}
                  source={{ html: item.content }} // Le contenu HTML de la note
                  ignoredDomTags={['input', 'form']} 
                  baseStyle={{
                    fontFamily: "MontserratRegular",
                    fontSize: hp(1.8),
                    color: themeColors.grayOpacity(0.8),
                    
                  }}
                />
            {/* <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.grayOpacity(0.8)}} className="text-base text-text mt-2">{item.content}</Text> */}
          </View>
          <ButtonCategorie text={category.name} bgColor={themeColors.grayOpacity(0.2)} />
        </TouchableOpacity>
        );
      }}
    />
  </View>
  );
};

