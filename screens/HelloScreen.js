import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';


// Empêche l'écran de splash de se cacher automatiquement
SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    'MontserratRegular': require('../assets/fonts/Montserrat-Regular.ttf'),
  });
};

export default function HelloScreen() {
  const navigation = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await loadFonts();
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null; // Affiche un écran vide pendant le chargement des polices
  }

  return (
    <View className="flex-1 items-center justify-between">
      <View className="flex-1 items-center justify-end gap-5">
        <Image className="rounded-full" style={{width:100, height:100}} source={require('../assets/images/mynote.png')} />
        <Text  style={{fontFamily:"MontserratRegular", fontSize:hp(2.5), color:themeColors.text}}>No more memory loss</Text>
      </View>
      <View className="flex-1 items-center justify-end mb-10 gap-3">
        <Button onPress={()=> navigation.navigate("Start")} text={"CONTINUE"} textColor={"white"} bgColor={themeColors.primary} bgColorhover={themeColors.secondary} />
        <View className="flex-row flex-wrap items-center justify-center" style={{width:330}}>
          <Text  style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.text}}>By tap Continue you’re agree to our</Text>
          <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.secondary}}> Terms & Condition </Text>
          <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.text}}> and </Text>
          <Text style={{fontFamily:"MontserratRegular", fontSize:hp(1.8), color:themeColors.secondary}}>Privacy policy</Text>
        </View>
      </View>
    </View>
  );
}

