import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import ButtonCategorie from './ButtonCategorie';
import ButtonPlusFloat from './ButtonPlusFloat';

const notesData = [
  {
    id: 1,
    title: 'Design the App',
    content: 'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat.',
    category: 'All',
  },
  {
    id: 2,
    title: 'Another Note',
    content: 'Morbi leo min. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat.',
    category: 'All',
  },
  {
    id: 3,
    title: 'Design the App',
    content: 'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat.',
    category: 'All',
  },
  {
    id: 4,
    title: 'Another Note',
    content: 'Morbi leo min. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat.',
    category: 'All',
  },
  {
    id: 5,
    title: 'Design the App',
    content: 'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat.',
    category: 'All',
  },
  {
    id: 6,
    title: 'Another Note',
    content: 'Morbi leo min. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat.',
    category: 'All',
  },
  // Ajoutez d'autres notes ici
];

 export default  NotesDisplay = () => {
  return (
    <View className="flex-1 p-3">
    <FlatList
      data={notesData}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ width: '48%', backgroundColor:themeColors.white, borderWidth: 1, borderRadius:5, margin:3, padding:10, borderColor:themeColors.grayOpacity(0.3)}}>
          <Text style={{fontFamily:"MontserratBold", fontSize:hp(2), color:themeColors.text}} className="font-bold text-lg text-black">{item.title}</Text>
          <View className="py-4" style={{height:180}}>
            <Text style={{fontFamily:"MontserratBold", fontSize:hp(1.5), color:themeColors.grayOpacity(0.5)}} className="text-base text-text mt-2">{item.content}</Text>
          </View>
          <ButtonCategorie text={item.category} bgColor={themeColors.grayOpacity(0.2)} />
        </TouchableOpacity>
      )}
    />
  </View>
  );
};

