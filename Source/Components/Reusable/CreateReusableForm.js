/* eslint-disable prettier/prettier */
//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const CreateReusableForm = () => {
  const [count, setCount] = useState(0);

  const [pick, setPick] = React.useState('');
  const [online, setOnline] = React.useState(0);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date(Date.now()));

  function showTimePicker() {
    setTimePicker(true);
  }

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  }

  function increment() {
    // const number = count.to;
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  const openDocumentFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res.uri, res.type, res.name, res.size);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  const options = {
    title: 'Video Picker',
    mediaType: 'video',
    // mediaType: 'image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const openPicker = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        console.log(source);
        setPick(source);

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerChild}>
        <View style={{ padding: 12 }}>
          {/* <View style={styles.createPostRow}>
            <Text style={{color: '#fff'}}>Learning Session Title</Text>
          </View> */}
          <View>
            <View>
              <Text style={styles.title}>Title</Text>
            </View>
            <TextInput
              style={styles.createMeetupRow}
              placeholder="Session Tittle"
              placeholderTextColor="#9e9e9e"

            />
          </View>

          <View style={{ marginVertical: 8 }}>
            <View>
              <Text style={styles.title}>Discription</Text>
            </View>
            <TextInput
              style={styles.createPostDescription}
              multiline={true}
              placeholder="Write Description"
              placeholderTextColor={'#9e9e9e'}
            />
          </View>

          <View>
            <Text style={styles.title}>File & Image upload</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.uploadFileBtn}
              onPress={openDocumentFile}>
              {/* <Entypo name="video-camera" color={'#fff'} size={22} /> */}
              <FontAwesome5 name="file-export" color={'#ffaa00'} size={15} />
              <Text style={{ color: '#9e9e9e', paddingLeft: 8, fontSize: 13 }}>Upload File</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.uploadFileBtn} onPress={openPicker}>
              <Entypo name="video-camera"  color={'#ffaa00'} size={15} />
              <Text style={{ color: '#9e9e9e', paddingLeft: 8, fontSize: 13 }}>Upload Image</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 8 }}>
            <View>
              <Text style={styles.title}>Date</Text>
            </View>

            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.createMeetupRow}>
              <Text style={{ color: '#9e9e9e', marginHorizontal: 4, fontSize: 13 }}>
                26-05-2022
              </Text>
              <View>
                <MaterialIcons name="date-range"  color={'#ffaa00'} size={15} />
              </View>
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

          <View style={{ flexDirection: 'row', marginVertical: 8 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Start Time</Text>
              <TouchableOpacity
                style={styles.uploadFileBtn}
                onPress={showTimePicker}>
                <Text style={{ color: '#9e9e9e', paddingRight: 8, fontSize: 13 }}>5.25PM</Text>
                <AntDesign name="clockcircleo"  color={'#ffaa00'} size={15} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>End Time</Text>
              <TouchableOpacity
                style={styles.uploadFileBtn}
                onPress={showTimePicker}>
                <Text style={{ color: '#9e9e9e', paddingRight: 8, fontSize: 13 }}>8.25PM</Text>
                <AntDesign name="clockcircleo"  color={'#ffaa00'} size={15} />
              </TouchableOpacity>
            </View>
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

          <View style={{ marginVertical: 8 }}>
            {/* <Text style={styles.title}>Fee per Minute (TK)</Text> */}

            <View>
              <TextInput
                placeholder="Fee Per min-500"
                placeholderTextColor={'#9e9e9e'}
                style={styles.textInput}
                keyboardType="number-pad"
              />
            </View>
          </View>

          <View style={{ marginVertical: 8 }}>
            {/* <Text style={styles.title}>Time Interval (MIN)</Text> */}
            <TextInput
              placeholder="Time Interval min-5"
              placeholderTextColor={'#9e9e9e'}
              style={styles.textInput}
              keyboardType="number-pad"
            />
          </View>

          <View style={{ marginVertical: 8 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>Max Time </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>Min Time</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                placeholder="5 min"
                placeholderTextColor={'#9e9e9e'}
                style={styles.textInputMax}
                keyboardType="number-pad"
              />
              <TextInput
                placeholder="3 min"
                placeholderTextColor={'#9e9e9e'}
                style={styles.textInputMax}
                keyboardType="number-pad"
              />
              {/* <View style={styles.createPostRowMainSlot}>
              <TouchableOpacity>
                <Text style={styles.tkStyle}>-</Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  flex: 10,
                  textAlign: 'center',
                  marginTop: 8,
                }}>
                500Tk
              </Text>
              <TouchableOpacity>
                <Text style={styles.tkStyle}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.createPostRowMainSlot}>
              <TouchableOpacity>
                <Text style={styles.tkStyle}>-</Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  flex: 10,
                  textAlign: 'center',
                  marginTop: 8,
                }}>
                {count}
              </Text>
              <TouchableOpacity>
                <Text style={styles.tkStyle}>+</Text>
              </TouchableOpacity>
            </View> */}
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.removeBtn}>
              <Text style={{ fontSize: 13, color: 'white' }}>CLEAR</Text>
            </TouchableOpacity>

            <LinearGradient colors={[ '#E19A04','#E7A725','#FFAD55','#FACF55',]} style={styles.confirmBtn}>
              <TouchableOpacity >
                <Text style={{ fontSize: 13, color: 'white', }}>
                  CONFIRM
                </Text>
              </TouchableOpacity>
            </LinearGradient>


          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    color: '#9e9e9e',
    marginHorizontal: 8,
    fontSize: 13,

    marginBottom: 6,
    // textAlign: 'center',
    color:'#C9B049'
  },
  textInput: {
    borderWidth: 0.7,
    borderRadius: 23,
    marginVertical: 7,
    borderColor: '#ffad00',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#181818',

  },
  textInputMax: {
    flex: 1,
    marginHorizontal: 8,
    borderWidth: 0.7,
    borderRadius: 23,
    marginVertical: 7,
    borderColor: '#ffad00',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#181818',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerChild: {
    backgroundColor: '#181819',
    margin: 15,
    borderRadius: 20,
  },
  createPostRow: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',

    borderWidth: 1,
    borderColor: '#ffad00',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#181818',
  },
  createPostRowMain: {
    // flex: 1,
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffad00',
    borderRadius: 20,
    padding: 10,
  },
  createPostRowMainSlot: {
    flex: 1,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffad00',
    borderRadius: 20,
    backgroundColor: '#181818',
    padding: 10,
  },
  createMeetupRow: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.7,
    borderColor: '#ffad00',
    borderRadius: 23,
    backgroundColor: '#181818',
    padding: 10,
    fontSize: 13,
    height: 43,
    color: 'white'
  },
  createPostTitle: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    color: 'white',
    borderWidth: 1,
    borderColor: '#ffad00',
    borderRadius: 20,
    padding: 10,
  },
  createPostDescription: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    color: 'white',
    borderWidth: 0.7,
    backgroundColor: '#181818',
    borderColor: '#ffad00',
    borderRadius: 35,
    padding: 10,
    minHeight: 70,
    fontSize: 13
  },
  uploadFile: {
    flex: 1,
    flexDirection: 'row',
  },
  uploadFileBtn: {
    backgroundColor: '#181818',
    flex: 1,
    margin: 6,
    flexDirection: 'row',
    color: 'white',
    borderWidth: 0.7,
    borderColor: '#ffad00',
    borderRadius: 23,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadFileBtnMain: {
    flex: 1,
    // margin: 8,
    // margin: 8,
    // flexDirection: 'row',
    color: 'white',
    // height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeBtn: {
    
    backgroundColor: '#2A2B2E',
    borderRadius: 20,
    width: '47%',
    height: 40,
    marginTop: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtn: {
    width: '47%',
    // backgroundColor: '#0B3E92',
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  freeBtn: {
    flex: 1,
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // tkStyle: {
  //   marginTop: 5,
  //   flex: 1,
  //   borderRadius: 20,
  //   borderWidth: 1,
  //   borderColor: '#fff',
  //   color: '#fff',
  //   flexDirection: 'row',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   width: 25,
  //   height: 25,
  // },
  tkStyle: {
    marginTop: 10,
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  tkStyleOffline: {
    // marginTop: 10,
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
  },
  parentOnlineView: {
    flexDirection: 'row',
  },
  onlineTab: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    margin: 8,
  },
  offlineTab: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    margin: 8,
  },
  activeOnline: {
    backgroundColor: 'coral',
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    margin: 8,
  },
  activeOnlineText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activeOfflineText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tkInput: {
    color: '#fff',
    flex: 10,
    textAlign: 'center',
  },
});

//make this component available to the app
export default CreateReusableForm;
