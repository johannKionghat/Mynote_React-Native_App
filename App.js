import React, {  useContext, useEffect, useState } from 'react';
import './global.css'
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import { FormValueProvider } from './context/FormContext';
import {GlobalProvider } from './context/GlobalContext';
import Navigation from "./navigation";


// importation des fonts Montserrat
const loadFonts = async () => {
    await Font.loadAsync({
        'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });
  };

export default function  App (){
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
      loadFonts().then(() => {
        setFontsLoaded(true);
      });
    }, []);
    
    if (!fontsLoaded) {
      return null; 
    }
    
  return (
      <GlobalProvider>
        <FormValueProvider>
          <MenuProvider>
            <NavigationContainer>
              <Navigation/>
            </NavigationContainer>
          </MenuProvider>
        </FormValueProvider>
      </GlobalProvider>
  );
};

