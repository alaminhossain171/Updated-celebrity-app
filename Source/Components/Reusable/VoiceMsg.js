/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import React from 'react';
import styles from './Styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import {useState} from 'react';
import imagePath from '../../Constants/imagePath';


const VoiceMsg = () => {
  const [mic, setMic] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imagePath.VoiceChatBg}
        style={{flex: 1, marginTop: -2}}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 8,
              marginLeft: 10,
            }}>
            <Image source={imagePath.Azhari} style={styles.UserImg} />
            <View
              style={{
                backgroundColor: '#202C33',
                justifyContent: 'center',
                marginHorizontal: 8,
                width: '50%',
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', marginLeft: 10}}>
                Recorded voice here
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'gray'}}>Today | 5pm</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 8,
              justifyContent: 'flex-end',
              marginRight: 10,
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'gray'}}>Today | 12am</Text>
            </View>
            <View
              style={{
                backgroundColor: '#202C33',
                justifyContent: 'center',
                marginHorizontal: 8,
                width: '50%',
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', marginLeft: 10}}>
                Recorded voice here
              </Text>
            </View>

            <Image source={imagePath.Azhari} style={styles.StarImg} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 8,
              marginLeft: 10,
            }}>
            <Image source={imagePath.Azhari} style={styles.UserImg} />
            <View
              style={{
                backgroundColor: '#202C33',
                justifyContent: 'center',
                marginHorizontal: 8,
                width: '50%',
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', marginLeft: 10}}>
                Recorded voice here
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'gray'}}>Today | 5pm</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 8,
              justifyContent: 'flex-end',
              marginRight: 10,
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text style={{color: 'gray'}}>Today | 12am</Text>
            </View>
            <View
              style={{
                backgroundColor: '#202C33',
                justifyContent: 'center',
                marginHorizontal: 8,
                width: '50%',
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', marginLeft: 10}}>
                Recorded voice here
              </Text>
            </View>

            <Image source={imagePath.Azhari} style={styles.StarImg} />
          </View>
        </ScrollView>
      </ImageBackground>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => setMic(!mic)}
          style={{justifyContent: 'center'}}>
          <View style={styles.sendBtn2}>
            <Icon name="microphone" color={'white'} size={15} />
          </View>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            width: '75%',
            position: 'relative',
          }}>
          {mic ? (
            <Image
              source={imagePath.wave}
              style={{height: 25, width: '100%'}}
            />
          ) : (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{borderWidth: 1, borderColor: '#1DAECA', width: '80%'}}
              />
            </View>
          )}
        </View>

        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity style={styles.sendBtn}>
            <Icon name="send" color={'white'} size={15} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VoiceMsg;
