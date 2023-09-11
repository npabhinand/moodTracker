import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
import Dash from './src/pages/Dash';
import Chat from './src/pages/Chat';
import Home from './src/pages/Home';
import Task from './src/pages/Task';
import Meds from './src/pages/Meds';
import { Avatar } from '@rneui/base';
// import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dash"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: '#ffff' ,borderTopRadius:20}}
      >
    <Tab.Screen
      name="DashBooard"
      component={Dash}
      options={{
        tabBarLabel: 'Careteam',
        tabBarIcon: ({ color }) => (
          <Avatar
          size={25}
          source={require(`./src/assets/careteam.png`)}
        
          color={color}
        />
        ),
      }}
    />
     <Tab.Screen
      name="Tasks"
      component={Task}
      options={{
        tabBarLabel: 'Tasks',
        tabBarIcon: ({ color }) => (
          <Avatar
          size={25}
          source={require(`./src/assets/tasks.png`)}
          color={color}
        />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Avatar
          size={25}
          source={require(`./src/assets/home.png`)}
          color={color}
        />
        ),
      }}
    />
     <Tab.Screen
      name="Meds"
      component={Meds}
      options={{
        tabBarLabel: 'Meds',
        tabBarIcon: ({ color }) => (
          <Avatar
          size={25}
          source={require(`./src/assets/medicine.png`)}
          color={color}
        />
        ),
      }}/>
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color }) => (
          <Avatar
          size={25}
          source={require(`./src/assets/chat.png`)}
          color={color}
        />
        ),
      }}
    />
     
   </Tab.Navigator>
    </NavigationContainer>
);
}

