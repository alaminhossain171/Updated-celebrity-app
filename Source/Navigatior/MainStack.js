/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import TabRoutes from './TabRoutes';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen name="Tab" component={TabRoutes} />
    </>
  );
};

export default MainStack;
