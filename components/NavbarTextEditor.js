import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { Entypo, Feather, FontAwesome, Ionicons, Octicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import MenuNote from './MenuNote';
import { getNotesbyBookmark, updateNoteBookmark } from '../db/crud';
import { globalContext } from '../context/GlobalContext';

export default function NavBarTextEditor() {
    const navigation = useNavigation();
    const { note, setNote, notesArrayBookmark, setNotesArrayBookmark } = useContext(globalContext);

    // Initialisation de l'état du signet en fonction de la valeur actuelle de note.bookmark
    const [selectedBookmark, setSelectedBookmark] = useState(note.bookmark === 1);
    const [selectedReminder, setSelectedReminder] = useState(false);

    useEffect(() => {
        // Mise à jour de l'état de l'icône lorsque note.bookmark change
        setSelectedBookmark(note.bookmark === 1);
    }, [note.bookmark]);

    const handleCheckBookmark = async () => {
        const newBookmarkValue = selectedBookmark ? 0 : 1; // Bascule entre 0 et 1
        setSelectedBookmark(!selectedBookmark); // Mise à jour de l'état local de l'icône
        await updateNoteBookmark(newBookmarkValue, note.id); // Mise à jour de la base de données        
        setNote({
            ...note,
            bookmark: newBookmarkValue, // Mise à jour du contexte global (si nécessaire)
        });
        setNotesArrayBookmark(await getNotesbyBookmark());
    };


    const handleCheckReminder = () => {
        setSelectedReminder(!selectedReminder);
    };

    return (
        <View className="flex-row justify-between items-center mt-5 py-5 px-3 bg-white">
            <View className="flex-row gap-3 items-center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" color={themeColors.black} size={hp(4)} />
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-between items-center gap-4">
                <TouchableOpacity onPress={handleCheckBookmark}>
                    <FontAwesome
                        name="bookmark"
                        color={selectedBookmark ? themeColors.black : themeColors.grayOpacity(0.5)}
                        size={hp(3)}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCheckReminder}>
                    <Octicons
                        name="stopwatch"
                        color={selectedReminder ? themeColors.black : themeColors.grayOpacity(0.5)}
                        size={hp(3)}
                    />
                </TouchableOpacity>
                <View>
                    <MenuNote />
                </View>
            </View>
        </View>
    );
}