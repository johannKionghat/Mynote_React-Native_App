import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from '../components/Button';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { themeColors } from '../theme';
import Navigation from '../navigation';
import { useNavigation } from '@react-navigation/native';


const { width: screenWidth } = Dimensions.get('window');

const data = [
  { title: 'Item 1', text1: 'Easy Notes', text2: 'Creation',text3:'with Colors',text4: 'Express ideas with vibrant colors', image: require('../assets/images/image1.png'), step: require('../assets/images/step1.png')},
  { title: 'Item 2', text1: 'Schedule', text2: 'Reminders',text3:'and Checklist',text4: 'Boost Productivity and Efficiency', image: require('../assets/images/image2.png'),step: require('../assets/images/step2.png') },
  { title: 'Item 3', text1: 'Lock Notes', text2: 'and Project',text3:'your Ideas',text4: 'Projection against Unwanted Access', image: require('../assets/images/image3.png') ,step: require('../assets/images/step3.png')},
];

export default function StartScreen() {
  const navigation=useNavigation();
  const renderItem = ({ item, index }) => (
    <View className="flex-1 justify-center" style={{height:"100%"}}>
        <View className="flex-1 items-center justify-center gap-3">
          <Image source={item.image} style={{width:"100%",height:"50%", objectFit:"contain"}}/>
          <View className="flex-row flex-wrap text-center items-center justify-center">
          <Text  style={{fontFamily:"MontserratBold", fontSize:hp(3), color:themeColors.primary}}>{item.text1}</Text>
          <Text style={{fontFamily:"MontserratBold", fontSize:hp(3), color:themeColors.text}}> {item.text2}</Text>
          </View>
          <Text style={{fontFamily:"MontserratBold", fontSize:hp(3), color:themeColors.text}}> {item.text3} </Text>
          <Text style={{fontFamily:"MontserratRegular", fontSize:hp(2), color:themeColors.text}}> {item.text4} </Text>
          <Image source={item.step} style={{width:30, objectFit:"contain"}}/>
        </View>
      </View>

      
      
  );

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <StatusBar barStyle={"dark-content"}/>
      <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 10}
        />
        <View className="flex pb-10" >
          <Button onPress={()=>navigation.navigate('Home')} text={"NEXT"} textColor={"white"} bgColor={themeColors.primary} bgColorhover={themeColors.secondary} />
        </View>
    </SafeAreaView>
  );
}

