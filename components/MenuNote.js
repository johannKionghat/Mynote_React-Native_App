import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
    Menu,
    MenuOptions,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { MenuItem } from './CustomMenuItems';
import { AntDesign, Feather } from '@expo/vector-icons';

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
                <TouchableOpacity>
                    <Feather name="settings" size={hp(3)} color="black"/>
                </TouchableOpacity>
            </MenuTrigger>
            <MenuOptions
              customStyles={{
                optionsContainer:{
                    borderRadius:10,
                    borderCurve: 'continuous',
                    marginTop: 40,
                    marginLeft: -30,
                    backgroundColor:'white',
                    shadowOpacity: 0.2,
                    shadowOffset: {width:0, height:0},
                    width:160,
                },
              }}
            >
                <MenuItem
                  text='Profile'
                //   action={handleProfile}
                  value={null}
                  icon={<Feather name="user" size={hp(2.5)} color='#737373'/>}
                />
                <Divider/>
                <MenuItem
                  text='Sign Out'
                //   action={handleLogout}
                  value={null}
                  icon={< AntDesign name="logout" size={hp(2.5)} color='#737373'/>}
                />
            </MenuOptions>
        </Menu>
  )
}
 