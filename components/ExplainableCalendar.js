import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Agenda } from 'react-native-calendars';
import { themeColors } from '../theme';

const ExplainableCalendar = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    const newItems = {};
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          newItems[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            newItems[strTime].push({
              name: `Notes for ${strTime}`,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        } else {
          newItems[strTime] = items[strTime];
        }
      }
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={[styles.item, { height: item.height }]}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={new Date().toISOString().split('T')[0]}
        renderItem={renderItem}
        theme={{
          backgroundColor: themeColors.white,
          calendarBackground: themeColors.white,
          textSectionTitleColor: themeColors.primary,
          textDayHeaderFontFamily:"MontserratBold",
          textDayFontFamily:"MontserratRegular",
          todayButtonFontFamily:"MontserratBold",
          textMonthFontFamily:"MontserratBold",
          selectedDayBackgroundColor: themeColors.primary,
          selectedDayTextColor: themeColors.white,
          todayTextColor: themeColors.white,
          dayTextColor: themeColors.text,
          dotColor:themeColors.primary,
          todayBackgroundColor:themeColors.primary,
          selectedDotColor:themeColors.white,
          // agendaDayTextColor:themeColors.primary,
          // agendaKnobColor:themeColors.third,
          // agendaDayNumColor:themeColors.primary,
          agendaTodayColor:themeColors.primary,
          }}
      />
    </View>
  );
};

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
});

export default ExplainableCalendar;
