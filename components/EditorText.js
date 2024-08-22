import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createNote, getAllNotes, getAllNotesFilter, getCategorybyId, updateNoteContent, updateNoteTitle, updateNoteUpdatedAt } from '../db/crud';
import { globalContext } from '../context/GlobalContext';
import { ScrollView } from 'react-native';

export default function EditorText() {
  const { notesArray,sortBy, setSortBy, range, setRange, setNotesArray, note , stateEdit, setStateEdit, setResultSearch, setSearchElement, category } = useContext(globalContext);
  const richText = useRef(); 
  const richTextTitle = useRef();
  const [dateCreated, setDateCreated] = useState("Null");
  const [dateUpdated, setDateUpdated] = useState("Null");


  useEffect(() => {
    if (setResultSearch) setResultSearch("");
    if (setSearchElement) setSearchElement("");
    
    if (note) {
      setDateCreated(note.createdAT || null);
      setDateUpdated(note.updatedAt || null);
    }
    if (!stateEdit){
      setDateCreated(null);
      setDateUpdated(null);
    }
  }, [note]);
  
  useEffect(()=>{
    async function fetchData(){
      let AllNotes = await getAllNotesFilter(sortBy,range);
      setNotesArray(AllNotes);
    };
    fetchData();
  },[]);
  const handleSave = async () => {
    try {
      let noteId = note?.id;

      if (!stateEdit) {
        await createNote("", "", "1"); 
        let AllNotes = await getAllNotes();
        noteId = AllNotes[AllNotes.length - 1]?.id;
      }

      const titleContent = await richTextTitle.current?.getContentHtml();
      const noteContent = await richText.current?.getContentHtml();

      if (titleContent && noteId) await updateNoteTitle(titleContent, noteId);
      if (noteContent && noteId) await updateNoteContent(noteContent, noteId);
     
      await updateNoteUpdatedAt(new Date());
      setNotesArray(await getAllNotesFilter(sortBy,range));
      alert(stateEdit ? "La note a été modifiée avec succès !" : "La note a été créée !");
      setStateEdit(true);
    } catch (e) {
      alert(`Error saving note: ${e.message}`);
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
        <View className="flex-col gap-3 justify-start p-3 my-3 rounded-md" style={{backgroundColor:category.color}}>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3 ">
              <Ionicons name="create" color={themeColors.black} size={hp(3)}/>
              <Text style={{color:themeColors.black, fontFamily:"MontserratBold"}}>Date created : </Text>
            </View>
            <Text style={{color:themeColors.black, fontFamily:"MontserratRegular"}}>{dateCreated ? new Date(dateCreated).toDateString() : new Date(Date.now()).toDateString()}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3 ">
              <MaterialIcons name="update" color={themeColors.black} size={hp(3)}/>
              <Text style={{color:themeColors.black, fontFamily:"MontserratBold"}}>Last update : </Text>
            </View>
            <Text style={{color:themeColors.black, fontFamily:"MontserratRegular"}}>{dateUpdated ? new Date(dateUpdated).toDateString() : new Date(Date.now()).toDateString()}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3 ">
              <Ionicons className="ml-1" name="grid" size={hp(2.5)} color={themeColors.black} />
              <Text style={{fontFamily:"MontserratBold",color:themeColors.black}}>Priority :</Text>
            </View>
            <Text style={{fontFamily:"MontserratRegular",color:themeColors.black}}>{category.name}</Text>
          </View>
        </View>
      <View className="flex-col p-2">
          <Text className="px-2" style={{fontFamily:"MontserratBold"}}>Titre</Text>
          <RichEditor
            ref={richTextTitle}
            placeholder="Your note title"
            editorStyle={{
              backgroundColor:"white",
              color:themeColors.black,
            }}
            initialContentHTML={stateEdit && note ? note.title : ""}
          />
      </View>
      <View className="flex-1 p-3 border rounded-xl" style={{borderColor:themeColors.grayOpacity(0.3)}}>
        <ScrollView>
        <RichEditor
          ref={richText}
          style={styles.editor}
          editorStyle={{
            backgroundColor:themeColors.white,
            color:themeColors.black,
          }}
          placeholder="Start writing here..."
          initialContentHTML={stateEdit && note ? note.content : ""}
        />
        </ScrollView>
      </View>
      <View className="flex-row items-center justify-center p-3">
        <TouchableOpacity onPress={handleSave} style={{backgroundColor:themeColors.white}}>
          <Ionicons name="save" size={hp(2.4)} color={themeColors.black}/>
        </TouchableOpacity>
        <RichToolbar
          editor={richText}
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.keyboard,
            actions.setStrikethrough,
            actions.setUnderline,
            actions.alignCenter,
            actions.alignLeft,
            actions.alignRight,
            actions.alignFull,
            actions.indent,
            actions.table,
            actions.undo,
            actions.redo,
          ]}
          style={styles.toolbar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
    padding: 10,
  },
  editor: {
    backgroundColor: themeColors.grayOpacity(0),
    flex: 1,
  },
  toolbar: {
    backgroundColor: themeColors.grayOpacity(0)
  },
});
