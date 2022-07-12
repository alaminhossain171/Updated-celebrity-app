/* eslint-disable prettier/prettier */
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
import {TextInput} from 'react-native-gesture-handler';
import VideoPlayer from 'react-native-video-player';
import imagePath from '../../Constants/imagePath';

// create a component
const EditCard = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));
  const [timePicker, setTimePicker] = useState(false);

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
        <View style={{marginVertical: 8}}>
          <Text style={styles.title}>Enter Title</Text>
          <TextInput
            style={styles.textInputHeader}
            placeholder={'Bowling Learning Session'}
            placeholderTextColor={'gray'}
          />
        </View>

        <View>
          <Text style={styles.title}>Enter Description</Text>
          <TextInput
            style={styles.textInput}
            placeholder={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            }
            placeholderTextColor={'gray'}
            multiline={true}
          />
        </View>

        <View style={{position: 'relative', margin: 8, borderRadius: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 8,
            }}>
            <TouchableOpacity style={styles.touchableOpacityEdit}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={imagePath.eight}
                  style={{marginTop: 4, marginRight: 2}}
                />
                <Text>Edit</Text>
              </View>
            </TouchableOpacity>
          </View>
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
        <View style={{marginVertical: 8}}>
          <Text style={styles.title}>Enter Instruction</Text>
          <TextInput
            style={styles.textInputHeader}
            placeholder={'Instruction'}
            placeholderTextColor={'gray'}
          />
        </View>
        <View>
          <Text style={styles.title}>Enter Description</Text>
          <TextInput
            style={styles.textInput}
            placeholder={
              '1.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type.'
            }
            placeholderTextColor={'gray'}
            multiline={true}
          />
        </View>

        <View style={{flexDirection: 'row', margin: 8}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: '#ddd'}}>Event Date</Text>
          </View>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.createMeetupRow}>
            <View style={{paddingHorizontal: 8}}>
              <Image source={imagePath.one} />
            </View>
            <Text style={{color: 'gray'}}>26-05-2022</Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <View style={{flexDirection: 'row', margin: 8}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: '#ddd'}}>From</Text>
          </View>
          <TouchableOpacity
            onPress={showTimePicker}
            style={styles.createMeetupRow}>
            <View style={{paddingHorizontal: 8}}>
              <Image source={imagePath.two} />
            </View>
            <Text style={{color: 'gray'}}>8.00 PM</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', margin: 8}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: '#ddd'}}>To</Text>
          </View>
          <TouchableOpacity
            onPress={showTimePicker}
            style={styles.createMeetupRow}>
            <View style={{paddingHorizontal: 8}}>
              <Image source={imagePath.two} />
            </View>
            <Text style={{color: 'gray'}}>9.00 PM</Text>
          </TouchableOpacity>
        </View>

        {timePicker && (
          <DateTimePicker
            value={time}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onTimeSelected}
          />
        )}

        <View style={{flexDirection: 'row', margin: 8}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: '#ddd'}}>Registration Date</Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.createMeetupRow}>
              <View style={{paddingHorizontal: 8}}>
                <Image source={imagePath.one} />
              </View>
              <Text style={{color: 'gray', fontSize: 10}}>26-05-2022</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.createMeetupRow}>
              <View style={{paddingHorizontal: 8}}>
                <Image source={imagePath.one} />
              </View>
              <Text style={{color: 'gray', fontSize: 10}}>26-05-2022</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', margin: 8}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: '#ddd'}}>Participation</Text>
          </View>
          <View style={styles.createMeetupRow}>
            <View style={{paddingHorizontal: 8}}>
              <Image source={imagePath.five} />
            </View>
            <TextInput
              style={{color: '#fff'}}
              placeholder={'10'}
              placeholderTextColor={'gray'}
              multiline={true}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', margin: 8}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: '#ddd'}}>Price (TK)</Text>
          </View>
          <View style={styles.createMeetupRow}>
            <View style={{paddingHorizontal: 8}}>
              <Image source={imagePath.six} />
            </View>
            <TextInput
              style={{color: '#fff'}}
              placeholder={'5000'}
              placeholderTextColor={'gray'}
              multiline={true}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', margin: 8}}>
          <TouchableOpacity style={styles.lastBtn}>
            <View style={styles.lstBtnChild}>
              <Image
                source={imagePath.seven}
                style={{height: 18}}
                resizeMode="stretch"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lastBtn}>
            <View style={styles.lstBtnChildTwo}>
              <Image
                source={imagePath.eight}
                style={{height: 18}}
                resizeMode="stretch"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lastBtn}>
            <View style={styles.lstBtnChildThree}>
              <Image
                source={imagePath.nine}
                style={{height: 18}}
                resizeMode="stretch"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  touchableOpacityEdit: {
    backgroundColor: '#ff0',
    width: 60,
    height: 25,
    borderRadius: 5,
  },
  title: {
    marginHorizontal: 14,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 5,
    paddingHorizontal: 7,
    height: 35,
    alignItems: 'center',
  },
  textInputHeader: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    marginHorizontal: 8,
    marginVertical: 5,
    color: 'white',
    fontWeight: 'bold',
    // fontSize: 18,
    paddingHorizontal: 8,
  },
  textInput: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginHorizontal: 8,
    color: 'white',
    padding: 10,
    marginVertical: 5,
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
export default EditCard;
