import { Text } from "react-native";
import { MenuOption } from "react-native-popup-menu"
// responsive library
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View } from "react-native";
import { themeColors } from "../theme";

export const MenuItem = ({text, action, value, icon})=>{
    return (
        <MenuOption onSelect={()=>action(value)}>
            <View className="px-4 py-1 flex-row justify-between items-center">
            {icon}
            <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.text}}> {text} </Text>
            </View>
        </MenuOption>
    )
}