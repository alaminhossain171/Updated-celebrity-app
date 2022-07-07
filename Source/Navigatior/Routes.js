/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Dashboard from '../Screens/Dashboard/Dashboard'
import MainNavigationString from '../Constants/MainNavigationString';

// import MainStack from './MainStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './TabRoutes';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
import AuthStack from './AuthStack';


const Drawer = createDrawerNavigator();



const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer >
            <Drawer.Navigator
            
            screenOptions={{
                headerStyle: {
                  backgroundColor: '#272727',

                  
                },
            }}
                drawerContent={(props) => <CustomDrawer {...props} />}
            >
                <Drawer.Screen name={MainNavigationString.TAB} component={TabRoutes} />
            </Drawer.Navigator>
            {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
                {AuthStack(Stack)}
            </Stack.Navigator> */}
        </NavigationContainer>
    );
}

export default Routes;

