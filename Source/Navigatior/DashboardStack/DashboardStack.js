/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../Screens/Dashboard/Dashboard';
import Schedule from '../../Screens/Schedule/Schedule';
import MainNavigationString from '../../Constants/MainNavigationString';
import Post from './../../Screens/Post/Post';
import LiveChat from './../../Screens/Live-chat/LiveChat';
import Audition from './../../Screens/Audition/Audition';
import StarShowcase from './../../Screens/Star-Showcase/Showcase';
import Learning from './../../Screens/Learning/Learning';
import Live from './../../Screens/Live/Live';
import Meetup from './../../Screens/MeetUp/Meetup';
import Qna from './../../Screens/QnA/Qna';
import Fangroup from './../../Screens/Fangroup/Fangroup';
import Greetings from './../../Screens/Greetings/Greetings';
import LearningAll from '../../Screens/Learning/LearningAll';
import Wallet from '../../Screens/Wallet/Wallet';
const StackDashbord = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <StackDashbord.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={MainNavigationString.DASHBORD}>
      <StackDashbord.Screen
        name={MainNavigationString.DASHBORD}
        component={Dashboard}
      />
      <StackDashbord.Screen
        name={MainNavigationString.SCHEDULE}
        component={Schedule}
      />

      {/*=========== //post route=============  */}
      <StackDashbord.Screen name={MainNavigationString.POST} component={Post} />

      {/* ============Live chat route===========  */}
      <StackDashbord.Screen
        name={MainNavigationString.LIVECHAT}
        component={LiveChat}
      />

      {/*====================== Audition==================  */}
      <StackDashbord.Screen
        name={MainNavigationString.AUDITION}
        component={Audition}
      />

      {/*====================== Star Showcase==================  */}
      <StackDashbord.Screen
        name={MainNavigationString.STARSHOWCASE}
        component={StarShowcase}
      />

      {/* =======================Learning =============================== */}
      <StackDashbord.Screen
        name={MainNavigationString.LEARNING}
        component={Learning}
      />
      <StackDashbord.Screen
        name={MainNavigationString.LEARNINGALL}
        component={LearningAll}
      />

      {/* =======================Live =============================== */}
      <StackDashbord.Screen name={MainNavigationString.LIVE} component={Live} />

      {/* =======================MeetUp =============================== */}
      <StackDashbord.Screen
        name={MainNavigationString.MEETUP}
        component={Meetup}
      />

      {/* =======================Greetings=============================== */}
      <StackDashbord.Screen
        name={MainNavigationString.GREETINGS}
        component={Greetings}
      />

      {/* =======================QnA=============================== */}
      <StackDashbord.Screen name={MainNavigationString.QNA} component={Qna} />

      {/*============== Fangroup==============  */}
      <StackDashbord.Screen
        name={MainNavigationString.FANGROUP}
        component={Fangroup}
      />

      {/*============== Wallet==============  */}
      <StackDashbord.Screen
        name={MainNavigationString.WALLET}
        component={Wallet}
      />
    </StackDashbord.Navigator>
  );
};

export default DashboardStack;
