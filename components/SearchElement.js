import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import { globalContext } from '../context/GlobalContext';
import { useNavigation } from '@react-navigation/native';
import { getAllNotes, getCategorybyId } from '../db/crud';
import RenderHTML from 'react-native-render-html';
import ButtonCategorie from './ButtonCategorie';


export default function SearchElement() {
  let {notesArray, setNotesArray, setNote, setStateEdit, resultSearch, setResultSearch} = useContext(globalContext);
  const navigation = useNavigation();
  
  useEffect(()=>{
    async function fetchData (){
      let AllNotes = await getAllNotes();
      setNotesArray(AllNotes);
    };
    fetchData();
  },[]);

  const handleNotesView = (item)=>{
    setNote(item);
    setStateEdit(true);
    navigation.navigate("TextEditor");
  }
  if (resultSearch.length === 0){
    return (
      <View className="flex-1 items-center justify-center p-5 mb-10">
      <View>
        <MaterialCommunityIcons name="file-find" size={hp(13)} color={themeColors.grayOpacity(0.3)} />
      </View>
      <View className="mb-8">
        <Text style={{fontFamily:"MontserratRegular", fontSize:hp(3), color:themeColors.grayOpacity(0.6)}}>No search notes !</Text>
      </View>
    </View>
    )
  }else{
    return (
      <View className="flex-1 p-3">
      <FlatList
        data={resultSearch}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={async ({item} ) => {
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
            </View>
            <ButtonCategorie text={category.name} bgColor={themeColors.grayOpacity(0.2)} />
          </TouchableOpacity>
          );
        }}
      />
    </View>
    );
  }
}