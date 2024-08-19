import React, { useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import { Touchable } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { act } from 'react';
import { getAllNotes, updateNoteContent, updateNoteTitle } from '../db/crud';
import { databaseContext } from '../context/DatabaseContext';

export default function EditorText  () {

  let {categoriesArray, setCategoriesArray, notesArray, setNotesArray} = useContext(databaseContext);
  const richText = useRef(); 
  const richTextTitle = useRef();
  const route = useRoute(); 
  let item = route.params.item;
  // remise du format initial objet
  item = JSON.parse(item);
  console.log(item.title);

  useEffect(()=>{
    let AllNotes = getAllNotes();
        console.log(AllNotes);
        setNotesArray(AllNotes);
  },[])
  const handleSave = () => {
    // alert("La note a été mise à jour")
    richTextTitle.current?.getContentHtml().then(content=>{
        // update title note in db
        updateNoteTitle(content, item.id);
    })
    richText.current?.getContentHtml().then(content => {
        // update content note in
        updateNoteContent(content, item.id);
    });
  };
  return (
    <View style={styles.container}>
        {/* title */}
        <RichEditor
        ref={richTextTitle}
        placeholder={"Title"}
        initialContentHTML={item.title}
       
      />
      {/* content */}

      <RichEditor
        ref={richText}
        style={styles.editor}
        placeholder="Start writing here..."
        initialContentHTML={item.content}
      />
      
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
                actions.checkboxList,
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
};

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
