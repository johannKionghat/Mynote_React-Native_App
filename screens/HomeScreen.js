import { View, Text } from 'react-native';
import NavBar from '../components/NavBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import Tab from '../components/Tab';
import { useContext, useEffect } from 'react';
import { databaseContext } from '../context/DatabaseContext';
import { db } from '../App';
import { createCategory, createNote, deleteAllCategories, deleteAllNotes, deleteCategoryByName, deleteNoteById, getAllCategories, getAllNotes, updateCategoryColor, updateCategoryName, updateNoteContent, updateNoteTitle } from '../db/crud';

export default function HomeScreen() {
  let {categoriesArray, setCategoriesArray, notesArray, setNotesArray} = useContext(databaseContext);
    // insertion des tables dans la base de données
    useEffect(()=>{
      db.execSync(
        // "DROP TABLE IF EXISTS categorie",
        "CREATE TABLE IF NOT EXISTS categorie (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50) NULL UNIQUE, color VARCHAR(20) NULL UNIQUE)",
      )
      db.execSync(
        // "DROP TABLE IF EXISTS notes",
        "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(100) NULL, content TEXT NULL, createdAT DATETIME DEFAULT CURRENT_TIMESTAMP, category_id INT , FOREIGN KEY (category_id) REFERENCES categorie(id) )",
      );    
    }, []);

    useEffect(()=>{
      let AllCategories = getAllCategories();
      setCategoriesArray(AllCategories);

      let AllNotes = getAllNotes();
      setNotesArray(AllNotes);
    },[]);

 return (
    <SafeAreaView className="flex-1 bg-white">
        <StatusBar barStyle={"dark-content"}/>
        <View style={{paddingTop:hp(3)}}>
        {/* Navbar */}
        <NavBar/>
        </View>
        <Tab/>
    </SafeAreaView>   
  );
}