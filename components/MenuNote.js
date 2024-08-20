import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
    Menu,
    MenuOptions,

    MenuTrigger,
  } from 'react-native-popup-menu';
import { MenuItem } from './CustomMenuItems';
import { Entypo, Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { themeColors } from '../theme';
import { globalContext } from '../context/GlobalContext';
import { deleteNoteById, getAllNotes } from '../db/crud';
import { useNavigation } from '@react-navigation/native';
import Divider from './Divider';

export default MenuNote = ()=>{
  const navigation = useNavigation()
  let { note, setNotesArray} = useContext(globalContext);
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
          <MenuItem
            text='Lock'
          //   action={handleProfile}
            value={null}
            icon={<Entypo name="lock" size={hp(3)} color={themeColors.black}/>}
          />
          <Divider/>
          <MenuItem
            text='Categorie'
          //   action={handleProfile}
            value={null}
            icon={<MaterialIcons name="category" size={hp(3)} color={themeColors.black}/>}
          />
          <Divider/>
          <MenuItem
            text='Delete'
            action={handleDeleteNote}
            value={null}
            icon={<MaterialIcons name="delete-sweep" size={hp(3)} color={themeColors.black}/>}
          />
        </MenuOptions>
    </Menu>
  )
}
 