/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
//import liraries
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import VideoPlayer from 'react-native-video-player';
import imagePath from '../../../Constants/imagePath';

// create a component
const CompletedScheduled = ({route}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));
  const [timePicker, setTimePicker] = useState(false);
  const {typeName} = route.params;

  function showTimePicker() {
    setTimePicker(true);
  }

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerQA}>
        <View style={{position: 'relative', margin: 8, borderRadius: 10}}>
          <VideoPlayer
            video={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            videoWidth={160}
            videoHeight={90}
            thumbnail={{
              uri: 'https://cdn.dribbble.com/users/2083345/screenshots/4553395/sakib.png',
            }}
          />
        </View>
        <View style={{margin: 8}}>
          <Text style={styles.textInputHeader}>This is {typeName}</Text>
          <Text style={{color: '#fff', marginHorizontal: 8}}>
            5:32 PM 2nd July
          </Text>
        </View>

        <View style={styles.underLineBlack}></View>
        <View style={{margin: 5}}>
          <Text style={styles.textInput}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
        </View>
        <View style={styles.underLineBlack}></View>

        <View style={{margin: 8}}>
          <View>
            <Text style={styles.textInputHeader}>Instruction</Text>
          </View>
          <View style={{marginVertical: 8}}>
            <Text style={styles.textInput}>
              1.Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.'
            </Text>
          </View>
        </View>

        <View style={{marginHorizontal: 8}}>
          <View style={{flexDirection: 'row', margin: 8}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#ddd'}}>Event Date</Text>
            </View>

            <View style={styles.createMeetupRow}>
              <View style={{paddingHorizontal: 8}}>
                <Image source={imagePath.one} />
              </View>
              <Text style={{color: '#fff'}}>26-05-2022</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', margin: 8}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#ddd'}}>From</Text>
            </View>
            <View style={styles.createMeetupRow}>
              <View style={{paddingHorizontal: 8}}>
                <Image source={imagePath.two} />
              </View>
              <Text style={{color: '#fff'}}>8.00 PM</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', margin: 8}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#ddd'}}>To</Text>
            </View>
            <View style={styles.createMeetupRow}>
              <View style={{paddingHorizontal: 8}}>
                <Image source={imagePath.two} />
              </View>
              <Text style={{color: '#fff'}}>9.00 PM</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', margin: 8}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#ddd'}}>Registration Date</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.createMeetupRow}>
                <View>
                  <Image source={imagePath.one} />
                </View>
                <Text
                  style={{color: '#fff', fontSize: 12, marginHorizontal: 2}}>
                  26-05-2022 To 27-05-200
                </Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', margin: 8}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#ddd'}}>Participant</Text>
            </View>
            <View style={styles.createMeetupRow}>
              <View style={{paddingHorizontal: 8}}>
                <Image source={imagePath.five} />
              </View>
              <Text style={{color: '#fff'}}>10</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', margin: 8}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#ddd'}}>Price</Text>
            </View>
            <View style={styles.createMeetupRow}>
              <View style={{paddingHorizontal: 8}}>
                <Image source={imagePath.six} />
              </View>
              <Text style={{color: '#fff'}}>5000 Tk</Text>
              {/* <TextInput
              style={{color: '#fff'}}
              placeholder={'5000 Tk'}
              placeholderTextColor={'#fff'}
              multiline={true}
            /> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  underLineBlack: {
    borderBottomColor: '#000',
    borderWidth: 2,
    marginVertical: 8,
  },
  lastBtn: {
    flex: 1,
  },
  lstBtnChild: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  lstBtnChildTwo: {
    alignItems: 'center',
    backgroundColor: 'gold',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  lstBtnChildThree: {
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  createMeetupRow: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 5,
    paddingHorizontal: 7,
    height: 35,
    alignItems: 'center',
  },
  textInputHeader: {
    marginHorizontal: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textInput: {
    marginHorizontal: 8,
    color: 'white',
  },
  sessionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  MainCard: {
    padding: 5,
    backgroundColor: '#343434',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  cardImg: {
    justifyContent: 'center',
  },
  starCardImg: {
    height: 34,
    width: 34,
    borderRadius: 50,
  },
  cardText: {
    color: 'white',
    paddingLeft: 5,
    fontSize: 15,
    marginTop: 3,
  },
  time: {
    fontSize: 12,
    margin: 0,
    paddingLeft: 5,
    color: '#AEAEAE',
  },
  containerQA: {
    backgroundColor: '#343434',
    margin: 8,
    borderRadius: 10,
    flex: 1,
  },
});

//make this component available to the app
export default CompletedScheduled;
