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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
  },
  Name: {
    color: 'white',
    fontSize: 20,
  },

  starName: {
    fontSize: 25,
    color: 'white',
    paddingHorizontal: 10,
  },

  starCardImgS: {
    borderRadius: 100,
  },

  StarPro: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    //    height:200,
  },

  UserImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'gold',
  },

  StarImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'gold',
  },

  inputTxt: {
    paddingLeft: 10,
    backgroundColor: '#2C323A',
    height: 39,
    borderRadius: 20,
    color: 'white',
  },
  sendBtn: {
    backgroundColor: '#1DAECA',
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendBtn2: {
    backgroundColor: '#FFAD00',
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
  },
});

export default VoiceMsg;
