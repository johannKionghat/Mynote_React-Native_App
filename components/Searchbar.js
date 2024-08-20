import { View, TextInput } from 'react-native';
import React, { useContext, useCallback } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { themeColors } from '../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { globalContext } from '../context/GlobalContext';
import { getNotesbyContent, getNotesbyTitle } from '../db/crud';

export default function Searchbar() {
  const { searchElement, setSearchElement, setResultSearch } = useContext(globalContext);

  const handleSearch = useCallback((text) => {
    async function fetchData (){
      if (text !== "") {
        const notebyTitle = await getNotesbyTitle(text);
        const notebyContent = await getNotesbyContent(text);
    
        // Combine les deux tableaux sans doublons
        const notesResultSearch = Array.from(new Set([...notebyTitle, ...notebyContent]));
        // Actualisation du résultat dans le context global
        setResultSearch(notesResultSearch);
      } else {
        setResultSearch([]);
      }
    };
    fetchData();
  }, [setResultSearch]);

  return (
    <View className="flex-row items-center px-4 p-2" style={{ marginRight: wp(5) }} >
      <View className="flex-row items-center px-4 py-3 rounded-full border border-gray-500">
        <FontAwesome name="search" size={hp(3)} color={themeColors.black} />
        <TextInput
          onChangeText={(text) => {
            setSearchElement(text);
            handleSearch(text);
          }} // Met à jour la valeur de searchElement
          value={searchElement}
          placeholder='Search'
          className='ml-2 flex-1'
        />
      </View>
    </View>
  );
}
