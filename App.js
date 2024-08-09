import React, {  useEffect, useState } from 'react';
import Navigation from "./navigation";
import './global.css'
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import { FormValueProvider } from './components/FormContext';


const loadFonts = async () => {
    await Font.loadAsync({
        'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });
  };


 

export default  App = ()=>{
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
    <FormValueProvider>
      <MenuProvider>
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
    </MenuProvider>
    </FormValueProvider>
    
    
  );
};

