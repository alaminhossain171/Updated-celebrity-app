/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import React, { useState, useEffect, useMemo } from 'react';
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
import { AuthContext } from '../Constants/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function Routes() {
    const [loading, setLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [useInfo, setUserInfo] = useState({});
    const [isLogin, setIsLogin] = useState(false);

    const [loginStatus, setLoginStatus] = useState(null);

    //token set
    const storeData = async value => {
        try {
            await AsyncStorage.setItem('auth_token', value);
        } catch (e) {
            // saving error
        }
    };

    //login information save
    const LoginStatusSet = async value => {
        try {
            // JSON.stringify(userInfo)
            await AsyncStorage.setItem('loginStaus', JSON.stringify(value));
        } catch (e) {
            // saving error
        }
    };

    //login information get
    const LoginStatusGet = async () => {
        try {
            const loginStatus = await AsyncStorage.getItem('loginStaus');
            if (loginStatus !== null) {
                let data = JSON.parse(loginStatus);
                // console.log(data.userInfo)
                setIsLogin(true);
                setUserInfo(data);
                setLoginStatus(data);
            }
        } catch (error) { }
    };

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${userToken}`,
            enctype: 'multipart/form-data',
        },
    };

    const authContext = useMemo(() => ({
        demoLogin: () => {
            setIsLogin(true);
        },
        signIn: (token) => {
            // setUserInfo(userInfo);
            storeData(token);
            setUserToken(token);
            setLoading(false);

            //user information update with Sign In
            // setLoginStatus(userInfo);
            // LoginStatusSet(userInfo);
        },
        signOut: () => {
            setIsLogin(false);
            AsyncStorage.removeItem('auth_token');
            AsyncStorage.removeItem('loginStaus');
            setUserToken(null);
            setLoginStatus(null);
            setLoading(false);
        },
        signUp: (token) => {
            storeData(token);
            setUserToken(token);

            //user information update with signup
            // setUserInfo(userInfo);
            // LoginStatusSet(userInfo);
        },
        Otp: () => {
            if (userToken) {

                LoginStatusSet(userToken)
            }
            // storeData(token);
            // setUserToken(token);
        },
        userInfoUpate: userInfo => {
            //user information update with information update
            setUserInfo(userInfo);
            LoginStatusSet(userInfo);
        },
        category: () => {
            setLoginStatus('login');
            LoginStatusSet(useInfo);
        },
        token: async () => {
            try {
                const value = await AsyncStorage.getItem('auth_token');
                if (value !== null) {
                    return value;
                }
            } catch (error) {
                console.log(error);
            }
        },
    }));

    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('auth_token');
            if (value !== null) {
                setUserToken(value);
                setTimeout(() => {
                    setLoading(false);
                }, 800);
            } else {
                setTimeout(() => {
                    setLoading(false);
                }, 800);
            }
        } catch (error) { }
    };

    useEffect(() => {
        console.log('user inforamtion...', useInfo);
        retrieveData();
        LoginStatusGet();
    }, []);
    return (
        <AuthContext.Provider
            value={{ authContext, userToken, axiosConfig, useInfo }}>
            <NavigationContainer >
                {isLogin ?

                    <Drawer.Navigator

                        screenOptions={{
                            headerStyle: {
                                backgroundColor: '#272727',


                            },

                            headerTintColor: 'white',

                        }}
                        drawerContent={(props) => <CustomDrawer {...props} />}
                    >
                        <Drawer.Screen name={MainNavigationString.TAB} component={TabRoutes} />
                    </Drawer.Navigator>
                    :
                    <Stack.Navigator screenOptions={{ headerShown: false }}>

                        {AuthStack(Stack)}
                    </Stack.Navigator>
                }
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default Routes;
