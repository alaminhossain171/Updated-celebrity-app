import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../Constants/imagePath';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MainNavigationString from '../../Constants/MainNavigationString';
import Card from '../../Components/Fangroup/Card';

const AllDataFanGroup = ({navigation}) => {
  return (
    <ScrollView style={{flex:1,backgroundColor:'black'}}>
      <Card title='Deepika Vs Katrina' />
      <Card title='Deepika Vs Katrina' />
      <Card title='Deepika Vs Katrina' />
    </ScrollView>
  );
};

export default AllDataFanGroup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  fontStyle:{
    color: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center',
  }
});
