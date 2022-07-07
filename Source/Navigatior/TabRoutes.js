/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
// import Dashboard from '../Screens/Dashboard/Dashboard'
import MainNavigationString from '../Constants/MainNavigationString';
// import Login from '../Screens/Auth/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
import DashboardStack from './DashboardStack/DashboardStack';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          //   position: 'absolute',
          backgroundColor: '#272727',
          //   borderRadius: 50,
          //   marginHorizontal:5,
          //   bottom: 10,
          //   paddingBottom: 6,
          //   height: 60
        },
      }}>
      <Tab.Screen
        name={MainNavigationString.DASHBORD}
        component={DashboardStack}
        options={{
          tabBarIcon: ({focused}) => {
            return <Icon name="home" size={20} color="red" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
