/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import TabRoutes from './TabRoutes';
import AuthNavigationString from '../Constants/AuthNavigationString';
import CelebrityAuth from '../Screens/Auth/CelebrityAuth';
import Flash from '../Screens/Auth/Flash';
import Qrc from '../Screens/Auth/Qrc';
import Congratulations from './../Screens/Auth/Congratulations';
import HelloStar from './../Screens/Auth/HelloStar';
import Loader from './../Screens/Auth/Loader';
import Otp from './../Screens/Auth/Otp';
import SignUp from './../Screens/Auth/SignUp';
import UserInformation from './../Screens/Auth/UserInformation';
import Login from './../Screens/Auth/Login';

const AuthStack = Stack => {
  return (
    <>
      <Stack.Screen
        name={AuthNavigationString.STARAUTH}
        component={CelebrityAuth}
      />
      <Stack.Screen name={AuthNavigationString.FLASH} component={Flash} />
      <Stack.Screen name={AuthNavigationString.LOGIN} component={Login} />
      <Stack.Screen name={AuthNavigationString.QRC} component={Qrc} />
      <Stack.Screen
        name={AuthNavigationString.USERINFORMATION}
        component={UserInformation}
      />
      <Stack.Screen name={AuthNavigationString.SIGNUP} component={SignUp} />
      <Stack.Screen name={AuthNavigationString.OTP} component={Otp} />
      <Stack.Screen
        name={AuthNavigationString.HELLOSTAR}
        component={HelloStar}
      />
      <Stack.Screen name={AuthNavigationString.LOADER} component={Loader} />

      {/* <Stack.Screen name={AuthNavigationString.CONGRATULATION} component={Congratulations} /> */}


    </>
  );
};

export default AuthStack;
