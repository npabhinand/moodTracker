import { LocaleConfig } from 'react-native-calendars';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.'
  ],
  dayNames: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
  dayNamesShort: [ 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sat','Su'],
  today: 'Today'
};

LocaleConfig.defaultLocale = 'fr';

const CalendarComponent = () => {
  const [selected, setSelected] = useState('');
  const today = new Date(); // Get the current date

  // Create a date string in the format 'YYYY-MM-DD' for the current day
  const currentDayString = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

  return (
    <View style={{ marginTop: 30 }}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          // Mark all dates from the start of the month to the current day
          [`2023-09-01/${currentDayString}`]: {
            backgroundColor: 'yellow', // Specify the background color
            textColor: 'black' // Specify the text color
          },
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
        }}
        style={{
          borderWidth: .2,
          borderRadius:10,
          borderColor: 'gray',
          height: 350,
          width:'95%',
          alignSelf:'center'
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e',
          arrowColor: 'orange' // Customize arrow color if needed
        }}
      />
    </View>
  );
};

export default CalendarComponent;
