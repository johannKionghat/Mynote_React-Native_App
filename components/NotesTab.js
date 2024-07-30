
import { View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import ButtonPlusFloat from './ButtonPlusFloat';
import NotesDisplay from './NotesDisplay';
import { useNavigation } from '@react-navigation/native';

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
  // Ajoutez d'autres notes ici
];

export default function NotesTab() {
  const navigation = useNavigation();
  return(
    <View className="flex-1">
      <View style={{position:"absolute", bottom:20, right:20, zIndex:1000}}>
        <ButtonPlusFloat onPress={()=>navigation.navigate("TextEditor")} bgColor={themeColors.primaryOpacity(0.3)} iconColor={themeColors.primary}/>
      </View>
      <NotesDisplay/>
    </View>
  )
  
  // return (
  //   <View className="flex-1 items-center justify-center p-5 mb-10">
  //     <View>
  //       <MaterialCommunityIcons name="bookshelf" size={hp(13)} color={themeColors.grayOpacity(0.5)} />
  //     </View>
  //     <View>
  //       <Text style={{fontFamily:"MontserratBold", fontSize:hp(3), color:themeColors.black}}>No Notes</Text>
  //     </View>
  //     <View className="mb-8">
  //       <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.text}}> you haven't created any note yet ! </Text>
  //     </View>
  //     <ButtonPlus text={"Create Note"} textColor={themeColors.white} bgColor={themeColors.primary} iconColor={themeColors.white} />
  //   </View>
  // )
}