//import liraries

import React, {useState, useCallback, useRef, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../../Constants/imagePath';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// create a component
const VirtualTour = () => {
  const navigation = useNavigation();
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  return (
    <ImageBackground
      source={imagePath.background}
      resizeMode="cover"
      style={styles.container}>
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Image source={imagePath.logo} style={{height: 100, width: 100}} />
      </View>

      <View
        style={{
          borderColor: '#FFAD00',
          borderWidth: 1,
          borderRadius: 5,
          margin: 13,
          marginTop: 100,
        }}>
        <View style={{padding: 10}}>
          <YoutubePlayer
            height={250}
            play={true}
            videoId={'ZbsYZ1K7xKc'}
            onChangeState={onStateChange}
          />
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{backgroundColor: '#FFAD00', width: '20%'}}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 3,
                  color: 'black',
                  fontSize: 18,
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

// define your styles
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  // linearGradient: {

  container: {
    flex: 1,
  },
});

//make this component available to the app
export default VirtualTour;
