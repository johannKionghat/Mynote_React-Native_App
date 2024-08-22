import { View, Text } from 'react-native';
import NavBar from '../components/NavBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import Tab from '../components/Tab';
import { useContext, useEffect } from 'react';
import { globalContext } from '../context/GlobalContext';
import { db, setupDatabase } from '../db/crud';
import { createCategory, createNote, deleteAllCategories, deleteAllNotes, deleteCategoryByName, deleteNoteById, getAllCategories, getAllNotes, updateCategoryColor, updateCategoryName, updateNoteContent, updateNoteTitle } from '../db/crud';
import { themeColors } from '../theme';

export default function HomeScreen() {
  let {categoriesArray, setCategoriesArray, notesArray, setNotesArray} = useContext(globalContext);
    // insertion des tables dans la base de données
    useEffect(() => {
      setupDatabase();
      
    }, []);

    useEffect(()=>{
      async function fetchData (){
        let AllCategories = await getAllCategories();
        if (AllCategories.length === 0){
          await createCategory('Sticky-Note', themeColors.yellow);
          await createCategory('Work', themeColors.primary);
          await createCategory('To Do', themeColors.secondary);
          await createCategory("normal",themeColors.grayOpacity(0.5));
          await createCategory('Done',themeColors.green );
          await createCategory('Important', themeColors.red);
          await createCategory('Urgent', themeColors.pink);
          await createCategory('Kanban', themeColors.third);
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