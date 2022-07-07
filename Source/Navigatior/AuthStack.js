import { View, Text } from 'react-native'
import React from 'react'
import TabRoutes from './TabRoutes';
import AuthNavigationString from '../Constants/AuthNavigationString';
import CelebrityAuth from '../Screens/Auth/CelebrityAuth';
import Flash from '../Screens/Auth/Flash';
import Qrc from '../Screens/Auth/Qrc'




const AuthStack = (Stack) => {
    return (
        <>

<Stack.Screen name={AuthNavigationString.QRC} component={Qrc} />
            <Stack.Screen name={AuthNavigationString.STARAUTH} component={CelebrityAuth} />
            <Stack.Screen name={AuthNavigationString.FLASH} component={Flash} />
        </>
    )
}

export default AuthStack