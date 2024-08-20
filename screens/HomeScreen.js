import { View, Text } from 'react-native';
import NavBar from '../components/NavBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import Tab from '../components/Tab';
import { useContext, useEffect } from 'react';
import { globalContext } from '../context/GlobalContext';
import { db } from '../db/crud';
import { createCategory, createNote, deleteAllCategories, deleteAllNotes, deleteCategoryByName, deleteNoteById, getAllCategories, getAllNotes, updateCategoryColor, updateCategoryName, updateNoteContent, updateNoteTitle } from '../db/crud';
import { themeColors } from '../theme';

export default function HomeScreen() {
  let {categoriesArray, setCategoriesArray, notesArray, setNotesArray} = useContext(globalContext);
    // insertion des tables dans la base de données
    useEffect(() => {
      async function setupDatabase () {
        await db.execAsync(
          // "DROP TABLE IF EXISTS categorie",
          "CREATE TABLE IF NOT EXISTS categorie (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50) NULL UNIQUE, color VARCHAR(20) NULL UNIQUE)",
        )
        await db.execAsync(
          // "DROP TABLE IF EXISTS notes",
          "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(100) NULL, content TEXT NULL, createdAT DATETIME DEFAULT CURRENT_TIMESTAMP, category_id INT , FOREIGN KEY (category_id) REFERENCES categorie(id) )",
        );
      };
      setupDatabase();
    }, []);


    useEffect(()=>{
      async function fetchData (){
        let AllCategories = await getAllCategories();
        if (AllCategories.length === 0){
          await createCategory("All",themeColors.grayOpacity(0.3));
        };
        AllCategories = await getAllCategories();
        setCategoriesArray(AllCategories);

        let AllNotes = await getAllNotes();
        setNotesArray(AllNotes); 
        }
        fetchData();
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