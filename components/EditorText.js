import React, { useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import { createNote, getAllNotes, getCategorybyId, updateNoteContent, updateNoteTitle } from '../db/crud';
import { globalContext } from '../context/GlobalContext';
import Divider from './Divider';

export default function EditorText() {
  const { notesArray, setNotesArray, note, stateEdit, setStateEdit, setResultSearch, setSearchElement, category } = useContext(globalContext);
  const richText = useRef(); 
  const richTextTitle = useRef();

  useEffect(() => {
    if (setResultSearch) setResultSearch("");
    if (setSearchElement) setSearchElement("");
  }, []);

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

      setNotesArray(await getAllNotes());
      alert(stateEdit ? "La note a été modifiée avec succès !" : "La note a été créée !");
      setStateEdit(true);
    } catch (e) {
      alert(`Error saving note: ${e.message}`);
      console.log(e);
    }
  };

  console.log(category)
  return (
    <View style={styles.container}>
        <View className="flex-col gap-3 justify-end p-3 my-3 rounded-md" style={{backgroundColor:category.color}}>
          <View className="flex-row items-center justify-end">
            <Text style={{color:themeColors.black, fontFamily:"MontserratBold"}}>{note.createdAT}</Text>
          </View>
          <View className="flex-row items-center justify-end">
            <Text style={{fontFamily:"MontserratRegular",color:themeColors.black}}>For : {category.name}</Text>
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
        <RichEditor
          ref={richText}
          style={styles.editor}
          editorStyle={{
            backgroundColor:themeColors.white,
            color:themeColors.grayOpacity(1),
          }}
          placeholder="Start writing here..."
          initialContentHTML={stateEdit && note ? note.content : ""}
        />
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
            actions.code,
            actions.indent,
            actions.line,
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
