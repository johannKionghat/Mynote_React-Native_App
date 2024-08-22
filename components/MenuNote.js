import { View, Text, Platform, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
    Menu,
    MenuOptions,

    MenuTrigger,
  } from 'react-native-popup-menu';
import { MenuItem } from './CustomMenuItems';
import { Entypo, Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { themeColors } from '../theme';
import { globalContext } from '../context/GlobalContext';
import { deleteNoteById, getAllCategories, getAllNotes, getAllNotesFilter, getCategorybyId, getNotesbyBookmark, getNotesbyId, getNotesbyIdsync, updateNoteCategoryId } from '../db/crud';
import { useNavigation } from '@react-navigation/native';
import Divider from './Divider';
import ModalPriority from './ModalPriority';

export default MenuNote = ()=>{

  const navigation = useNavigation()
  const { note,setNote, setNotesArray,categoriesArray, sortBy,range, setNotesArrayBookmark,setCategory} = useContext(globalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

 
  const onChangePriority = async () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };
  const handleChangePriority =async (categoryId)=>{
    console.log("id: ",note.id);
    await updateNoteCategoryId(categoryId, note.id)
    const AllNotes = await getAllNotesFilter(sortBy,range);
    setNotesArray(AllNotes);

    const AllNoteBookmark = await getNotesbyBookmark();
    setNotesArrayBookmark(AllNoteBookmark);
    
    const newNote = await getNotesbyId(note.id)
    setNote(newNote[0]);
    setCategory(await getCategorybyId(newNote[0].category_id))
    
 

  }
 
  const handleDeleteNote = async ()=>{
    await deleteNoteById(note.id);
    setNotesArray(await getAllNotes());
    navigation.navigate("Home");
    alert("La note a été supprimé");
  }
  

  return (
    <Menu>
        <MenuTrigger customStyles={{
            triggerWrapper:{
                // trigger wrapper style
            }
        }}>
          <Feather name="settings" size={hp(3)} color="black"/>
        </MenuTrigger>
        <MenuOptions
          customStyles={{
          optionsContainer:{
            borderRadius:10,
            borderCurve: 'continuous',
            marginTop: 40,
            marginLeft: -10,
            backgroundColor:'white',
            shadowOpacity: 0.2,
            shadowOffset: {width:0, height:0},
            width:160,
            },
          }}
        >
          {/* <MenuItem
            text='Lock'
          //   action={handleProfile}
            value={null}
            icon={<Entypo name="lock" size={hp(3)} color={themeColors.black}/>}
          /> */}
          {/* <Divider/> */}
          <MenuItem
            text='Priotity'
            action={onChangePriority}
            value={null}
            icon={<Ionicons name="grid" size={hp(2.5)} color={themeColors.black}/>}
          />
          <Divider/>
          <MenuItem
            text='Delete'
            action={handleDeleteNote}
            value={null}
            icon={<MaterialIcons name="delete-sweep" size={hp(3)} color={themeColors.black}/>}
          />
        </MenuOptions>
        <ModalPriority  isVisible={isModalVisible} onClose={onModalClose}>
          <FlatList
          horizontal
            data={categoriesArray}
            keyExtractor={item => item.id.toString()}
            renderItem={({item})=>{
              return(
                <>
             
                <TouchableOpacity onPress={()=>handleChangePriority(item.id)} style={{padding:10,borderRadius:10,borderCurve:"circular", backgroundColor:item.color, width:150, height:130, margin:15}}>
                    <Text style={{fontFamily:"MontserratBold"}} className="text-center">{item.name}</Text>
                </TouchableOpacity>
                </>
              )
            }}
            />
        </ModalPriority>
    </Menu>
  )
}
 