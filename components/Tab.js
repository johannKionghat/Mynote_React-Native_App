import { useState } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import NotesTab from './NotesTab';
import ReminderTab from './ReminderTab';
import BookmarkTab from './BookmarkTab';

const Notes = () => (
  <View style={{ flex: 1, backgroundColor: themeColors.white }}>
    <NotesTab/>    
</View>
);

// const reminder = () => (
//   <View style={{ flex: 1, backgroundColor: themeColors.white }}>
//     <ReminderTab/>
// </View>
// );

const bookmark = () => (
    <View style={{ flex: 1, backgroundColor: themeColors.white }} >
        <BookmarkTab/>
    </View>
  );

const renderScene = SceneMap({
  first: Notes,
  // second: reminder,
  third: bookmark,
});


export default function Tab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Notes' },
    // { key: 'second', title: 'Reminder' },
    { key: 'third', title: 'Bookmark' },

  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <Text  style={{ color:themeColors.text, fontFamily:"MontserratRegular", fontSize:hp(2) }}>
          {route.title}
          {focused}
        </Text>
      )}
      indicatorStyle={{ backgroundColor: themeColors.primary }}
      style={{ backgroundColor: themeColors.white }}
    //   labelStyle={{color:themeColors.text, fontFamily:"MontserratBold", fontSize:hp(2)}}
    />
  );
  

  return (
    
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      
    />
  );
}