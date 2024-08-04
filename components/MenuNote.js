import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
    Menu,
    MenuOptions,

    MenuTrigger,
  } from 'react-native-popup-menu';
import { MenuItem } from './CustomMenuItems';
import { AntDesign, Entypo, Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { themeColors } from '../theme';

export default MenuNote = ()=>{
    const Divider = ()=>{
        return (
          <View className="p-[1px] w-full bg-neutral-200"/>
        )
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
                  text='Read'
                //   action={handleProfile}
                  value={null}
                  icon={<MaterialIcons name="menu-book" size={hp(3)} color={themeColors.black}/>}
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
                  text='Share'
                //   action={handleProfile}
                  value={null}
                  icon={<Entypo name="share" size={hp(3)} color={themeColors.black}/>}
                />
          
            </MenuOptions>
        </Menu>
  )
}
 