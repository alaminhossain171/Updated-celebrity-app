import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagePath from '../../Constants/imagePath';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MainNavigationString from '../../Constants/MainNavigationString';
const Accepted = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
   <View style={{margin: 10, backgroundColor: '#2D2D2D', borderRadius: 5}}>
        <View style={{margin: 10}}>
          <Image
            source={imagePath.pooja}
            style={{width: '100%', resizeMode: 'stretch', height: 200}}
          />
        </View>
        <Text
          style={styles.fontStyle}>
    Puja hegde vs Rashmika
        </Text>

        <TouchableOpacity style={{margin: 10}} onPress={()=>navigation.navigate(MainNavigationString.ACCEPTEDCARD)}>
          <LinearGradient
            colors={['#FED703', '#FDAB2E']}
            style={{borderRadius: 10, padding: 8}}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              June 25,2022-September 30,2022
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

 
    </ScrollView>
  );
};

export default Accepted;

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
