import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Agenda } from 'react-native-calendars';
import { themeColors } from '../theme';
import { globalContext } from '../context/GlobalContext';
import RenderHTML from 'react-native-render-html';
import ButtonPlus from './ButtonPlus';
import { getCategorybyName, getNotesByDate } from '../db/crud';
import { useNavigation } from '@react-navigation/native';

const ExplainableCalendar = () => {
  const { setStateEdit, setCategory } = useContext(globalContext);
  const [notesByDate, setNotesByDate] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const navigation = useNavigation();

  // Load notes for the selected date
  const loadItems = async (day) => {
    const selectedDay = day.dateString;
    setSelectedDate(selectedDay);

    const notes = await getNotesByDate(selectedDay);
    setNotesByDate(notes);
  };

  // Handle creating a new note
  const handleNewNote = async () => {
    setStateEdit(false);
    setCategory(await getCategorybyName('Sticky-Note'));
    navigation.navigate('TextEditor', { selectedDate });
  };

  // Render each item or show the "Create Note" button if no notes are present
  const renderItem = () => {
    if (notesByDate.length === 0) {
      return (
        <ButtonPlus
          onPress={handleNewNote}
          text="Create Note"
          textColor={themeColors.white}
          bgColor={themeColors.primary}
          iconColor={themeColors.white}
        />
      );
    } else {
      return (
        <FlatList
          data={notesByDate}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleNotesView(item)}
              style={{
                width: '100%',
                backgroundColor: themeColors.grayOpacity(0.9),
                borderWidth: 1,
                borderRadius: 5,
                margin: 3,
                padding: 10,
                borderColor: themeColors.grayOpacity(0.3)
              }}
            >
              <RenderHTML
                contentWidth={wp(48)}
                source={{ html: item.title }}
                ignoredDomTags={['input', 'form']}
                baseStyle={{
                  fontFamily: 'MontserratBold',
                  fontWeight: 'bold',
                  fontSize: hp(2),
                  color: themeColors.black,
                }}
              />
              <View style={{ height: 50, overflow: 'hidden', marginBottom: 10 }}>
                <RenderHTML
                  contentWidth={wp(48)}
                  source={{ html: item.content }}
                  ignoredDomTags={['input', 'form']}
                  baseStyle={{
                    fontFamily: 'MontserratRegular',
                    fontSize: hp(1.8),
                    color: themeColors.black,
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={{ [selectedDate]: notesByDate }}
        loadItemsForMonth={() => {}} // No-op since we're only loading one day at a time
        selected={selectedDate}
        onDayPress={loadItems} // Load notes when a date is selected
        renderItem={renderItem}
        renderEmptyData={renderItem} // Show "Create Note" button if no notes
        theme={{
          backgroundColor: themeColors.white,
          calendarBackground: themeColors.white,
          textSectionTitleColor: themeColors.primary,
          textDayHeaderFontFamily: "MontserratBold",
          textDayFontFamily: "MontserratRegular",
          todayButtonFontFamily: "MontserratBold",
          textMonthFontFamily: "MontserratBold",
          selectedDayBackgroundColor: themeColors.primary,
          selectedDayTextColor: themeColors.white,
          todayTextColor: themeColors.white,
          dayTextColor: themeColors.text,
          dotColor: themeColors.primary,
          todayBackgroundColor: themeColors.primary,
          selectedDotColor: themeColors.white,
          agendaTodayColor: themeColors.primary,
        }}
      />
    </View>
  );
};

export default ExplainableCalendar;
