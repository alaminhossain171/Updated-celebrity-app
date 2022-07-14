/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainNavigationString from '../../Constants/MainNavigationString';
import { AuthContext } from '../../Constants/context';

function CustomDrawer(props) {
  const Navigation = useNavigation();
  const { authContext } = useContext(AuthContext);
  return (
    <DrawerContentScrollView style={{ backgroundColor: 'black' }} {...props}>
      {/* <DrawerItemList {...props} /> */}
      <View
        style={{
          backgroundColor: '#292C3B',
          justifyContent: 'center',
          bottom: 6,
        }}>
        <View style={{ marginLeft: 10, paddingVertical: 20 }}>
          <Image
            source={{
              uri: `https://api.bdcrictime.com/players/348.png`,
            }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'gold',
            }}
          />
          <Text style={{ color: 'white', fontSize: 18, marginVertical: 3 }}>
            Shakib Al Hasan
          </Text>
          <Text style={{ color: 'gray', fontSize: 10 }}>Shakib@gmail.com</Text>
          <Text style={{ color: 'gold', fontSize: 14, marginVertical: 1 }}>
            Superstar
          </Text>
        </View>
      </View>
      <DrawerItem
        label="Schedule"
        icon={() => <Icon name="calendar-o" size={20} color="gold" />}
        labelStyle={{ color: '#f2f2f2', borderColor: '#a8a8a8' }}
        onPress={() => Navigation.navigate(MainNavigationString.SCHEDULE)}
        style={{ borderColor: '#2e2d2d', borderBottomWidth: 2, borderRadius: 10 }}
      />
      <DrawerItem
        label="Wallet"
        icon={() => <Entypo name="wallet" size={20} color="gold" />}
        labelStyle={{ color: '#f2f2f2' }}
        onPress={() => Navigation.navigate(MainNavigationString.WALLET)}
        style={{ borderColor: '#2e2d2d', borderBottomWidth: 2, borderRadius: 10 }}
      />
      <DrawerItem
        label="Setting"
        icon={() => (
          <Ionicons name="ios-settings-sharp" size={20} color="gold" />
        )}
        labelStyle={{ color: '#f2f2f2' }}
        onPress={() => Navigation.navigate(MainNavigationString.SETTING)}
        style={{ borderColor: '#2e2d2d', borderBottomWidth: 2, borderRadius: 10 }}
      />
      <DrawerItem
        label="Logout"
        icon={() => <Entypo name="log-out" size={20} color="gold" />}
        labelStyle={{ color: '#f2f2f2' }}
        onPress={() => authContext.signOut()}
        style={{ borderColor: '#2e2d2d', borderBottomWidth: 2, borderRadius: 10 }}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
