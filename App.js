import React, {  useContext, useEffect, useState } from 'react';
import Navigation from "./navigation";
import './global.css'
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import { FormValueProvider } from './context/FormContext';
import * as SQLite from "expo-sqlite";
import { createCategory, createNote, deleteAllCategories, deleteAllNotes, deleteById, deleteCategoryByName, deleteNoteById, getAllCategories, getAllNotes, updateCategoryColor, updateCategoryName, updateNoteContent, updateNoteTitle, } from './db/crud';
import { databaseContext, DatabaseProvider } from './context/DatabaseContext';

// importation des fonts Montserrat
const loadFonts = async () => {
    await Font.loadAsync({
        'MontserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });
  };

// creation de ma base de données
export const db = SQLite.openDatabaseSync("mynote.db") // si elle n'existe pas elle sera crée automatiquement
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
    <DatabaseProvider>
        <FormValueProvider>
          <MenuProvider>
            <NavigationContainer>
              <Navigation/>
            </NavigationContainer>
          </MenuProvider>
        </FormValueProvider>
    </DatabaseProvider>
  );
};

