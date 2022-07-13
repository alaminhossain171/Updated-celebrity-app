//import liraries
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DocumentPicker from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// create a component
const AuctionAddProduct = () => {
  const [pick, setPick] = React.useState('');

  const [freeShow, setFreeShow] = React.useState(false);
  const [paidShow, setPaidShow] = React.useState(0);
  const [fileShow, setFileShow] = React.useState(null);
  const [timePicker, setTimePicker] = React.useState(false);

  const [time, setTime] = React.useState(new Date(Date.now()));

  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  function showTimePicker() {
    setTimePicker(true);
  }

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
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
        const source = {uri: response.uri};
        console.log(source);
        setPick(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={{padding: 12}}>
        <View>
          <TextInput
            style={styles.createPostRow}
            placeholder="Product Name"
            placeholderTextColor={'#ff0'}
          />
        </View>
        <View>
          <TextInput
            style={styles.createPostDescription}
            multiline={true}
            placeholder="Post Description"
            placeholderTextColor={'#ff0'}
          />
        </View>

        <View style={styles.productPrice}>
          <View style={styles.productTitle}>
            <Text style={{color: '#ff0'}}>Product Price</Text>
          </View>

          <View style={styles.price}>
            <TextInput
              style={{color: '#ddd'}}
              placeholder="$30"
              placeholderTextColor={'#ddd'}
            />
          </View>
        </View>
        <View style={styles.productPrice}>
          <View style={styles.productTitle}>
            <Text style={{color: '#ff0'}}>Product Units</Text>
          </View>

          <View style={styles.price}>
            <TextInput
              style={{color: '#ddd'}}
              placeholder="13"
              placeholderTextColor={'#ddd'}
            />
          </View>
        </View>

        <View>
          <TextInput
            style={styles.createPostRowTwo}
            placeholder="Set Auction Time Schedule"
            placeholderTextColor={'#ff0'}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.createMeetupRow}>
            <Text style={{color: 'gold', marginTop: 5}}>26-05-2022</Text>
            <View>
              <MaterialIcons name="date-range" color={'gold'} size={22} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createMeetupRow}
            onPress={showTimePicker}>
            <Text style={{color: 'gold', paddingRight: 8,  marginTop: 5}}>5.25PM</Text>
            <AntDesign name="clockcircleo" color={'gold'} size={22} />
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.createMeetupRow}>
            <Text style={{color: 'gold'}}>26-05-2022</Text>
            <View>
              <MaterialIcons name="date-range" color={'gold'} size={22} />
            </View>
          </TouchableOpacity> */}
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

        <View style={styles.uploadFile}>
          <TouchableOpacity
            style={styles.uploadFileBtn}
            onPress={openDocumentFile}>
            <Entypo name="image" color={'#ff0'} size={22} />
            {/* <Text style={{color: '#ff0', paddingLeft: 8}}></Text> */}
            <Text style={{color: '#ff0', textAlign: 'center'}}>
              Upload Product Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadFileBtn}
            onPress={openDocumentFile}>
            <Entypo name="image" color={'#ff0'} size={22} />
            {/* <Text style={{color: '#ff0', paddingLeft: 8}}></Text> */}
            <Text style={{color: '#ff0', textAlign: 'center'}}>
              Upload Product Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadFileBtn}
            onPress={openDocumentFile}>
            <Entypo name="image" color={'#ff0'} size={22} />
            {/* <Text style={{color: '#ff0', paddingLeft: 8}}></Text> */}
            <Text style={{color: '#ff0', textAlign: 'center'}}>
              {' '}
              Upload Product Image
            </Text>
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

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.removeBtn}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  createMeetupRow: {
    flex: 1,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gold',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#121212',
  },
  price: {
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
    borderColor: 'gold',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTitle: {
    // color: 'gold',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  productPrice: {
    // flex: 1,
    borderWidth: 1,
    borderColor: 'gold',
    // padding: 10,
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#121212',
    marginTop: 8,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  createPostRow: {
    backgroundColor: '#121212',
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#ff0',
    borderRadius: 20,
    padding: 10,
  },
  createPostRowTwo: {
    backgroundColor: '#121212',
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff0',
    borderRadius: 20,
    padding: 10,
  },
  createPostTitleDollar: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#121212',
    alignItems: 'center',
    color: 'white',
    borderWidth: 1,
    borderColor: '#ff0',
    borderRadius: 20,
    padding: 10,
  },
  createPostDescription: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    color: 'white',
    borderWidth: 1,
    borderColor: '#ff0',
    borderRadius: 20,
    backgroundColor: '#121212',
    padding: 10,
    minHeight: 80,
  },
  uploadFile: {
    // flex: 1,
    flexDirection: 'row',
  },
  uploadFileBtn: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'column',
    color: 'white',
    borderWidth: 1,
    backgroundColor: '#121212',
    borderColor: '#ff0',
    borderRadius: 20,
    height: 100,
    marginRight: 5,
    marginLeft: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeBtn: {
    backgroundColor: '#F6B718',
    borderRadius: 20,
    flex: 1,
    height: 40,
    marginTop: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtn: {
    flex: 1,
    backgroundColor: '#39D1B9',
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
    borderColor: '#ff0',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  freeBtnActive: {
    flex: 1,
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    borderColor: '#ff0',
    backgroundColor: 'coral',
    color: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default AuctionAddProduct;
