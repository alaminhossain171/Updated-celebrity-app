/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { TextInput } from 'react-native-gesture-handler';
import VideoPlayer from 'react-native-video-player';
import imagePath from '../../Constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import MainNavigationString from '../../Constants/MainNavigationString';
import Icon from 'react-native-vector-icons/MaterialIcons';

// create a component
const PendingCard = ({ route }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));
  const [timePicker, setTimePicker] = useState(false);
  const { typeName } = route.params;

  const Navigation = useNavigation();

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


        <View style={{ backgroundColor: '#282828', borderRadius: 15, padding: 10 }}>
          <View style={{ position: 'relative', margin: 8, borderRadius: 10 }}>
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
          <View style={{ margin: 8 }}>
            <Text style={styles.textInputHeader}>This is {typeName}</Text>
            <Text style={{ color: '#ffaa00', fontSize: 12, marginHorizontal: 8 }}>
              5:32 PM 2nd July
            </Text>
          </View>


          <View style={{ margin: 5 }}>
            <Text style={styles.textInput}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
          </View>
        </View>


        <View style={{ backgroundColor: '#282828', borderRadius: 10, marginVertical: 10, padding: 10 }}>
          <View>
            <Text style={styles.textInputHeader}>Instruction</Text>
          </View>
          <View style={{ marginVertical: 8 }}>
            <Text style={styles.textInput}>
              1.Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.'
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#282828', borderRadius: 10, marginBottom: 10, padding: 10 }}>
          <View style={{ flexDirection: 'row', margin: 8 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ color: '#ddd' }}>Event Date</Text>
            </View>

            <View style={styles.createMeetupRow}>
              <View style={{ paddingHorizontal: 8 }}>
                <Icon name="date-range" size={20} color="#ffaa00" />
              </View>
              <Text style={{ color: '#fff' }}>26-05-2022</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', margin: 8 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ color: '#ddd' }}>From</Text>
            </View>
            <View style={styles.createMeetupRow}>
              <View style={{ paddingHorizontal: 8 }}>
                <Icon name="access-time" size={20} color="#ffaa00" />
              </View>
              <Text style={{ color: '#fff' }}>8.00 PM</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', margin: 8 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ color: '#ddd' }}>To</Text>
            </View>
            <View style={styles.createMeetupRow}>
              <View style={{ paddingHorizontal: 8 }}>
                <Icon name="av-timer" size={20} color="#ffaa00" />
              </View>
              <Text style={{ color: '#fff' }}>9.00 PM</Text>
            </View>
          </View>


          <View style={{ flexDirection: 'row', margin: 8 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ color: '#ddd' }}>Registration</Text>
            </View>
            <View style={styles.createMeetupRow}>
              <View style={{ paddingHorizontal: 8 }}>
                <Icon name="app-registration" size={20} color="#ffaa00" />
              </View>
              <Text style={{ color: '#fff' }}>10-2-22 to 12-4-22</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', margin: 8 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ color: '#ddd' }}>Participants</Text>
            </View>
            <View style={styles.createMeetupRow}>
              <View style={{ paddingHorizontal: 8 }}>
                <Icon name="groups" size={20} color="#ffaa00" />
              </View>
              <Text style={{ color: '#fff' }}>100</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', margin: 8 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ color: '#ddd' }}>Price</Text>
            </View>
            <View style={styles.createMeetupRow}>
              <View style={{ paddingHorizontal: 8 }}>
                <Icon name="attach-money" size={20} color="#ffaa00" />
              </View>
              <Text style={{ color: '#fff' }}>5000 Tk</Text>
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
      <View style={{backgroundColor: '#282828',marginHorizontal:10,borderRadius:10,marginBottom:10}}>
        <View style={{ flexDirection: 'row', margin: 8, }}>
          <TouchableOpacity style={styles.lastBtn}>
            <View style={styles.lstBtnChild}>
            <Icon name="close" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Navigation.navigate(MainNavigationString.EDITCARD, { typeName })
            }
            style={styles.lastBtn}>
            <View style={styles.lstBtnChildTwo}>
            <Icon name="pending-actions" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lastBtn}>
            <View style={styles.lstBtnChildThree}>
            <Icon name="done" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
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
    // backgroundColor: '#343434',
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
    // backgroundColor: '#343434',
    margin: 8,
    borderRadius: 10,
    flex: 1,
  },
  lastBtn: {
    flex: 1,
  },
  lstBtnChild: {
    alignItems: 'center',
    backgroundColor: '#F72736',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  lstBtnChildTwo: {
    alignItems: 'center',
    backgroundColor: '#FA6DA3',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  lstBtnChildThree: {
    alignItems: 'center',
    backgroundColor: '#5167F6',
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
});

//make this component available to the app
export default PendingCard;
